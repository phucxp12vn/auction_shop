$(document).ready(function() {
    $("#chatRoom").show();
    var userName = $("#userName").val();
    var userId = $("#userId").val();
    var auctionId = $("#auctionId").val();
    var startBid = $("#startBid").val();
    var bidAmount = $("#bidAmount").val();
    var timeStart = $("#timeStart").val();
    var timeEnd = $("#timeEnd").val();
    //Create room
    $("#btnCreate").click(function() {
        var nameRoom = $("#txtRoom").val();
        if (nameRoom) {
            socket.emit("client-send-RoomName", {
                auctionId: auctionId,
                userId: userId,
                startBid: startBid,
                bidAmount: bidAmount,
                timeStart: timeStart,
                timeEnd: timeEnd,
            });
            $("#txtRoom").val("");
            $("#listMessagesRoom").html("");
        }
    });

    //Double click Show box chat room
    $("#myRoom").on('dblclick', '.myRoom-Name', function() {
        var row = $(this).closest("div");
        $name = row.data("name");
        $("#nameRoom").html($name);
        $("#nameRoom").attr("data-name", $name);
        $("#listMessagesRoom").html("");
        $("#formChatRoom").show();
    });

    //Send messages to Server
    $("#btnSendMessageRoom").click(function(e) {
        $name = $("#nameRoom").attr("data-name");
        socket.emit("user-chat", {
            auctionId: auctionId,
            userId: userId,
            startBid: startBid,
            bidAmount: bidAmount,
            timeStart: timeStart,
            timeEnd: timeEnd,
            currentValue: $("#txtMessageRoom").val()
        })
    });

    //Leave room and close box chat room    
    $("#btnLeaveRoom").click(function() {
        //get name room 
        $name = $("#nameRoom").attr("data-name");
        socket.emit("leave-room", $name);
        //close Box chat room
        $("#formChatRoom").hide(300);
        //remove ROOM in list my room
        $(".myRoom-Name[data-name=" + $name + "]").remove();
    });

    //Close Box chat Room
    $("#headerRoom").dblclick(function() {
        $("#formChatRoom").hide(300);
    });

    //Get name room click radio to Add room
    $("#myRoomName").on('click', '.myRoom-Name', function() {
        $(this).find('input').prop('checked', true)
        $name = $("input[name='rdRadio']:checked").val();
        $("#myRoomName").attr("data-name", $name);
    });

    //Event click button Add group, send $id,$nameGroup to Server 
    $("#boxContent").on('click', '#btnAddGroup', function() {
        //get id list User
        var row = $(this).closest("div");
        $id = row.data("name");
        //get name room in my room to Add room
        $nameGroup = $("#myRoomName").attr("data-name");
        if ($nameGroup) {
            socket.emit("Add-group", {
                idUser: $id,
                nameGroup: $nameGroup
            });
        }
    });
    //show list user in room
    $("#headerRoom").mouseover(function() {
        $name = $("#nameRoom").attr("data-name");
        socket.emit("send-list-us-Room", $name);
        $("#boxUser").show();
    });
    $("#headerRoom").mouseout(function() {
        $("#boxUser").hide();
    });

});

//------SERVER => CLIENT--------//
//Show lit Room
socket.on("server-send-rooms", function(data) {
    $("#dsRoom").html("");
    data.map(function(r) {
        $("#dsRoom").append("<div class='room' data-name='" + r + "'>" + r + "</div>");
    });
});

//Show my Room
socket.on("server-send-room-socket", function(data) {
    $(".myRoom-Name[data-name=" + data + "]").remove();
    $("#myRoomName").append(
        "<div class='myRoom-Name' data-name='" + data + "'>" + data +
        "<input class='rdCheck' name='rdRadio' type='radio' value='" + data + "'></div>"
    );
});

//Get message
socket.on("server-chat", function(data) {
    $("#nameRoom").attr("data-name", data.nameRoom);
    $("#nameRoom").html(data.nameRoom);
    $("#formChatRoom").show(300);
    $("#oldValue").val(data.nd);
    if(data.un == $('#currentUser').text()) {
        $("#listMessagesRoom").append(
            "<div class='ndChat' align='right'>" +
            "<strong> " + data.un + " </strong> :" +
            data.nd + "</div>"
        );
    }  else {
        $("#listMessagesRoom").append(
            "<div class='ndChat' align='left'>" +
            "<strong> " + data.un + " </strong> :" +
            data.nd + "</div>"
        );
    }
    
    $("#txtMessageRoom").val("");
});

//Get message joined room from Server
socket.on("server-send-user-join-Room", function(data) {
    $("#nameRoom").attr("data-name", data.nameRoom);
    $("#nameRoom").html(data.nameRoom);
    $("#formChatRoom").show(300);
    //var datetime = dateFormat(new Date(), "mm/dd/yy, h:MM:ss TT");
    var d = new Date();
    var datetime = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear() + " " +
        d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    $("#listMessagesRoom").append(
        "<div class='ndChat' style='font-size:10px;'>" +
        "<strong> " + data.name + " </strong><span style='color:gray;'> joined room  " +
        "<span class='time'>" + datetime + "</span></span></div>"
    );
});

//Get message leave room from Server
socket.on("server-send-user-leave-Room", function(data) {
    $("#nameRoom").attr("data-name", data.nameRoom);
    $("#nameRoom").html(data.nameRoom);
    $("#formChatRoom").show(300);
    var d = new Date();
    var datetime = d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear() + " " +
        d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    $("#listMessagesRoom").append(
        "<div class='ndChat' style='font-size:10px;'>" +
        "<strong> " + data.name + " </strong><span style='color:gray;'> left room  " +
        "<span class='time'>" + datetime + "</span></div>"
    );
});

//Clients get name AddGroup from Server and Join user in this Room
socket.on("Server-send-addGroup", function(data) {
    socket.emit("client-send-RoomName", data);
});

//Get list User in Room
socket.on("server-send-lstUser-Room", function(data) {
    $("#lstUser-Room").html("");
    data.map(function(r) {
        $("#lstUser-Room").append("<div class='room' data-name='" + r + "'>" + r + "</div>");
    });
});
socket.on("error-value", function() {
    alert("số tiền lỗi");
});
socket.on("finish-auction", function(data) {
    alert("winner is "+data.userId+" value"+data.value+". Congratulation!");
    socket.emit("leaveAllUser", data);
})