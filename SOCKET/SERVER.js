var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
var axios = require("axios");
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3011);

//list User connect to server
var mangUsers = [];
var maxBid = {};
io.on("connection", function (socket) {

  function User($username, $id) {
    this.UserName = $username;
    this.ID = $id;
    this.status = true;
  }

  function searchForId(userName) {
    for (var i = 0; i < mangUsers.length; i++) {
      if (mangUsers[i].UserName == userName) {
        return mangUsers[i].ID;
      }
    }
    return false;
  }

  function searchForUserName(id) {
    for (var i = 0; i < mangUsers.length; i++) {
      if (mangUsers[i].ID == id) {
        return mangUsers[i];
      }
    }
    return false;
  }

  //Create username, send list User to client
  socket.on("client-send-Username", function (data) {
    $flag = true;
    var object = {};
    var numb = -1;
    mangUsers.forEach(function (item, i) {
      if (item.UserName == data) {
        // Exits user
        numb = i;
        object = item;
        $flag = false;
        return;
      }
    });

    if (object.UserName) {
      if (object.status == true) {
        socket.emit("server-send-dki-thatbai");
      } else {
        mangUsers[numb].ID = socket.id;
        mangUsers[numb].status = true;
        socket.Username = data;
        socket.emit("server-send-dki-thanhcong", mangUsers[numb]);
        io.sockets.emit("server-send-danhsach-Users", mangUsers);
      }
    } else {
      $users = new User(data, socket.id);
      //add array list USER
      mangUsers.push($users);
      socket.Username = data;
      socket.emit("server-send-dki-thanhcong", $users);
      io.sockets.emit("server-send-danhsach-Users", mangUsers);
    }
  });

  //remove user in list User
  socket.on("logout", function () {
    for (var i = 0; i < mangUsers.length; i++) {
      if (mangUsers[i].ID === socket.id) {
        mangUsers[i].status = false;
        break;
      }
    }
    socket.broadcast.emit("server-send-danhsach-Users", mangUsers);
  });

  //send username and message to client
  socket.on("user-send-message", function (data) {
    if (socket.Username !== undefined) {
      io.sockets.emit("server-send-mesage", {
        un: socket.Username,
        nd: data
      });
    }
  });

  // ------ CHAT ROOM ------- //
  // socket.adapter.rooms=>list rooms
  socket.on("client-send-RoomName", function (data) {
    if (socket.Username !== undefined) {
      var mangRoom = Object.keys(io.sockets.adapter.rooms);
      var existRoom = false;
      for (let i = 0; i < mangRoom.length; i++) {
        if (data.auctionId == mangRoom[i]) {
          existRoom = true;
          break;
        }
      }
      if (!existRoom) {
        var obj = {
          currentMaxUser: data.userId,
          startBid: data.startBid,
          bidAmount: data.bidAmount,
          timeStart: data.timeStart,
          timeEnd: data.timeEnd,
          currentMaxValue: data.startBid,
        }
        maxBid[data.auctionId] = obj;
      }
      socket.join(data.auctionId);
      socket.Room = data.auctionId;
      var mang = [];
      for (name in socket.adapter.rooms) {
        var flag = true;
        for (var i = 0; i < mangUsers.length; i++) {
          if (mangUsers[i].ID == name) {
            flag = false;
            break;
          }
        }
        if (flag == true) {
          mang.push(name);
        }
      }
      io.sockets.emit("server-send-rooms", mang);
      socket.emit("server-send-room-socket", data);
      //list user in Room
      var lstUser = [];

      var sioRoom = io.sockets.adapter.rooms[data.auctionId];
      if (sioRoom) {
        Object.keys(sioRoom.sockets).forEach(function (socketId) {
          for (var i = 0; i < mangUsers.length; i++) {
            if (mangUsers[i].ID === socketId) {
              lstUser.push(mangUsers[i].UserName);
            }
          }
        });
        // send list user in Room
        io.sockets.in(data.auctionId).emit("server-send-lstUser-Room", lstUser);
        //Send username, nameRoom joined room
        io.sockets.in(data.auctionId).emit("server-send-user-join-Room", {
          name: socket.Username,
          nameRoom: data.auctionId
        });
      }
    }
  });

  //Server send message to client in Room // xu ly dau gia
  socket.on("user-chat", function (data) {
    var currentMaxValue = parseInt(maxBid[data.auctionId].currentMaxValue);
    var bidAmount = parseInt(maxBid[data.auctionId].bidAmount);
    var currentValue = parseInt(data.currentValue);
    var timeNow = (new Date).getTime();
    var timeEnd = new Date(maxBid[data.auctionId].timeEnd).getTime();//thoi gian ket thuc lay ben trangchu.ejs input hidden timeEnd
    if (socket.Username !== undefined) {
      if (currentValue > currentMaxValue && currentValue % bidAmount == 0){
        if(timeNow > timeEnd) {//xem thoi gian hien tai co be hon thoi gian ket thuc k
          console.log(maxBid[data.auctionId].currentMaxUser);
          io.sockets.in(data.auctionId).emit("finish-auction", {
            userId: maxBid[data.auctionId].currentMaxUser,
            value: maxBid[data.auctionId].currentMaxValue, //max value tra ve va luu db
            nameRoom: data.auctionId
          });
          // var url = 'http://127.0.0.1:8000/api/auction/updateWinner/'+data.auctionId; xai cai nay de dynamic
          var url = 'http://127.0.0.1:8000/api/auction/updateWinner/2';//t dang set cung, xai` cai tren
          axios({
              method: 'get',
              url: url,
              data: {
                winner: maxBid[data.auctionId].currentMaxUser,
                last_bid: maxBid[data.auctionId].currentMaxValue,
                status: 0,
              },
              responseType: 'stream'
            }).then(function (response) {
            });
            var sioRoom = io.sockets.adapter.rooms[data.auctionId];
            console.log(sioRoom);
            if (sioRoom) {
              Object.keys(sioRoom.sockets).forEach(function (socketId) {
                io.sockets.sockets[socketId].leave(data.auctionId); // leave room
              });
            }
        } else {
          maxBid[data.auctionId].currentMaxValue = data.currentValue;
          maxBid[data.auctionId].currentMaxUser = data.userId;
          io.sockets.in(data.auctionId).emit("server-chat", {
            un: socket.Username,
            nd: data.currentValue, //gia tri tien hop le tra ve, tien lon nhat
            nameRoom: data.auctionId
          });
          
        }
      } else {
        socket.emit("error-value");
      }
    }
  });

  // Leave room
  socket.on("leave-room", function (data) {
    socket.leave(data);
    var lstRooom = [];
    // get list room, except room default of socket
    for (r in socket.adapter.rooms) {
      var flag = true;
      for (var i = 0; i < mangUsers.length; i++) {
        if (mangUsers[i].ID == r) {
          flag = false;
          break;
        }
      }
      if (flag == true) {
        lstRooom.push(r);
      }
    }
    io.sockets.emit("server-send-rooms", lstRooom);

    //list user in Room
    var lstUser = [];
    var sioRoom = io.sockets.adapter.rooms[data];
    if (sioRoom) {
      Object.keys(sioRoom.sockets).forEach(function (socketId) {
        for (var i = 0; i < mangUsers.length; i++) {
          if (mangUsers[i].ID === socketId) {
            lstUser.push(mangUsers[i].UserName);
          }
        }
      });
      io.sockets.in(data).emit("server-send-lstUser-Room", lstUser);
      //Send username, name room left room
      io.sockets.in(data).emit("server-send-user-leave-Room", {
        name: socket.Username,
        nameRoom: data
      });
    }
  });

  //Send list user in room when user leave room, user hover in room
  socket.on("send-list-us-Room", function (data) {
    //list user in Room
    var lstUser = [];
    var sioRoom = io.sockets.adapter.rooms[data];
    if (sioRoom) {
      Object.keys(sioRoom.sockets).forEach(function (socketId) {
        for (var i = 0; i < mangUsers.length; i++) {
          if (mangUsers[i].ID === socketId) {
            lstUser.push(mangUsers[i].UserName);
          }
        }
      });
      // send list user in Room
      io.sockets.in(data).emit("server-send-lstUser-Room", lstUser);
    }
  });

  //Disconnect
  socket.on("disconnect", function () {
    for (var i = 0; i < mangUsers.length; i++) {
      if (mangUsers[i].ID === socket.id) {
        mangUsers[i].status = false;
        break;
      }
    }
    socket.broadcast.emit("server-send-danhsach-Users", mangUsers);
    // console.log(socket.id + " ngat ket noi");
  });
});

app.get("/", function (req, res) {
  res.render("trangchu");
});
