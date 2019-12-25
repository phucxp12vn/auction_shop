import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import mockData from './data';
import { api } from '../../helpers';
import { withRouter, Switch, Redirect } from 'react-router-dom';

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
    id: '',
    start_bid: 100000,
    bidAmount: 10000,
    last_bid: 0,
    timeStart: '',
    timeEnd: '',
    seller: '',
    status: '',
    bidHistory: [],
    currentBid: 100000,
    currentWinner: 'Tam',
    bidPrice: null,
    product: {
      name: '',
      brand: '',
      description: '',
    },
    user: {
      id: '',
      email: '',
      fullName: ''
    }
  });

  const handleBid = bidInfo => {
    // Tại đây sẽ gọi API và nhận được reposonse là bidHistory. từ đó gán vào bidHistory cũ.
    socket.emit('user-chat', {
      auctionId: auctionIdUrl,
      userId: bidInfo['userId'],
      userName: bidInfo['userName'],
      currentValue: bidInfo['bidPrice']
    });
  };

  useEffect(() => {
    api.getAuctionInfo(auctionIdUrl) //props.match.params.auctionId
      .then(res => {
        var data = res.data.result;
        data['bidHistory'] = [];
        data['id'] = auctionIdUrl;
        api.getUser()
          .then(res => {
            data['user'] = res.data;
            setRoomState(data);
            // console.log('use effect roomstate', roomState);
          })
          .catch(err => {});
      })
      .catch(err => {});

    setRoomState({
      ...roomState,
      id: auctionIdUrl,
      user: {
        id: 'test',
        email: 'test',
        fullName: 'test'
      }
    });

    socket.on('server-chat', data => {
      let temp = roomState.bidHistory;
      temp.push({
        id: data['nameRoom'],
        userName: data['un'],
        userId: data['ui'],
        bidPrice: data['nd'],
        dateTime: moment().format('YYYY-MM-DD HH:mm:ss')
      });

      setRoomState({
        ...roomState,
        bidHistory: temp,
        // currentWinner:data.un,
        // currentBid:data.nd,
      });
    });
  }, []);

  useEffect(() => {
    // ---------------------222222---------------- -
    socket.emit('client-send-Username', roomState.user.fullName); //roomState.user.fullName
    if (roomState.timeEnd != "") {
      socket.emit('client-send-RoomName', {
        auctionId: roomState.id,
        userId: roomState.user.id,
        startBid: roomState.start_bid,
        bidAmount: roomState.bidAmount,
        timeEnd: roomState.timeEnd
      });
    }
    
    // -------------------333333---------------------
    
  }, [roomState]);

  useEffect(() => {
    socket.on('finish-auction', function(data) {
      alert(
        'winner is ' + data.userId + ' value' + data.value + '. Congratulation!'
      );
      socket.emit('leaveAllUser', data);
      props.history.push('/products');
    });
  }, []);

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
            user={roomState.user}
            bidHistory={roomState.bidHistory}
            onBid={handleBid}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(Room);
