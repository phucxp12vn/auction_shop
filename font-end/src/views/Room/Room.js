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
import moment from 'moment';
import { createAuctionUrl } from 'helpers/constant';
const io = require('socket.io-client');
const socket = io('http://localhost:3011');

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const rows = mockData;

const Room = props => {
  const classes = useStyles();
  const auctionIdUrl = props.match.params.auctionId;
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
    bidHistory: [],
    product: {
      name: '',
      brand: '',
      currentBid: 100000,
      currentWinner: 'Tam',
      description: '',
      bidPrice: null
    }
  });

  const [userState, setUserState] = useState({
    id : '',
    email : '',
    fullName : '',
  });

  const handleBid = bidInfo => {
    // Tại đây sẽ gọi API và nhận được reposonse là bidHistory. từ đó gán vào bidHistory cũ.
    socket.emit("user-chat", {
      auctionId: auctionIdUrl,
      userId: userState.id,
      currentValue: bidInfo['bidPrice']
    })

  };

  useEffect(() => {
    api.getAuctionInfo(auctionIdUrl) //props.match.params.auctionId
      .then(res => {
        var data = res.data.result;
        data['bidHistory'] = [];
        data['id'] = auctionIdUrl;
        setRoomState(data);
      })
      .catch(err => {
      })

    api.getUser()
      .then(res => {
        setUserState(res.data);
      })
      .catch(err => {
      })

  }, []);


  useEffect(() => {
    console.log('joining room');
      socket.emit("client-send-Username", "Tran Van Phuc");
      socket.emit("client-send-RoomName", {
        auctionId: roomState.id,
        userId: userState.id,
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
        userName: data['un'],
        bidPrice: data['nd'],
        dateTime: moment().format("YYYY-MM-DD HH:mm"),
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
