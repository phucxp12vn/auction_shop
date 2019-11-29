import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import mockData from './data';
import { api } from '../../helpers';

import {
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Divider
} from '@material-ui/core';

import { Product, RoomDetails } from './components';
const io = require('socket.io-client');
const socket = io('http://localhost:3011');

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const rows = mockData;

const Room = () => {
  const classes = useStyles();

  const [roomState, setRoomState] = useState({
    name: 'ten phong',
    id : '',
    start_bid: 100000,
    bidAmount: 10000,
    last_bid: 0,
    timeStart: '',
    timeEnd: '',
    seller: '',
    status: '',
    bidHistory: rows,
    product: {
      name: '',
      brand: '',
      currentBid: 100000,
      currentWinner: 'Tam',
      description: '',
      bidPrice: null
    }
  });

  const handleBid = bidInfo => {
    // Tại đây sẽ gọi API và nhận được reposonse là bidHistory. từ đó gán vào bidHistory cũ.
    socket.emit("user-chat", {
      auctionId: "roomId",
      userId: '2',
      currentValue: bidInfo['bidPrice']
    })

  };

  // useEffect(() => {
  //   api.getAuctionInfo(1) //props.match.params.auctionId
  //     .then(res => {
  //       var data = res.data.result;
  //       data['bidHistory'] = [];
  //       setRoomState(data);
  //     })
  //     .catch(err => {
  //     })
  // }, []);


  useEffect(() => {
    console.log('joining room');
      socket.emit("client-send-Username", "Tran Van Phuc");
      socket.emit("client-send-RoomName", {
        auctionId: roomState.id,
        userId: '2',
        startBid: roomState.start_bid,
        bidAmount: roomState.bidAmount,
        timeEnd: roomState.timeEnd
    });
  });

  useEffect(() => {
    socket.on("server-chat", data => {
      let temp = roomState.bidHistory;
      temp.push({
        id: data['nameRoom'],
        userName : data['un'],
        bidPrice: data['nd'],
        dateTime: ""
      });
      setRoomState({
        ...roomState,
        bidHistory: temp
      });
      alert(data.nd);
    });

    socket.on("finish-auction", function (data) {
      alert("winner is " + data.userId + " value" + data.value + ". Congratulation!");
      socket.emit("leaveAllUser", data);
    });
  });
  
  return (
    <div className={classes.root}>
      <Grid container>
        {/* style={{ justifyContent: 'center' }}   */}
        {/* <Grid item lg={4} md={6} xl={4} xs={12}>
          <RoomDetails />
        </Grid> */}
        <Grid>
          {/* item lg={8} md={6} xl={8} xs={12} */}
          <Product
            roomState={roomState}
            bidHistory={roomState.bidHistory}
            onBid={handleBid}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Room;
