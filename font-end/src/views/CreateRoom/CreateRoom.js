import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import uuid from 'uuid/v1';

import { Product, RoomDetails } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const CreateRoom = () => {
  const classes = useStyles();

  const [roomState, setRoomState] = useState({
    display: true,
    room: {
      roomId: uuid(),
      roomName: '',
      desc: '',
      startBid: '',
      bidJump: 0,
      startTime: '2017-05-24T10:30',
      endTime: '2017-05-24T10:30'
    },
    product: {
      name: '',
      auctionId: '',
      picture: {
        name: '',
        file: null
      },
      brand: '',
      price: '',
      desc: ''
    }
  });

  const handleSaveRoomDetails = room => {
    console.log('ROOOOOMMM', room);
    setRoomState(roomState => ({
      ...roomState,
      display: false,
      room
    }));
  };

  const handleAddProduct = product => {
    console.log('Producttttttt', product);
    setRoomState(roomState => ({
      ...roomState,
      product
    }));
    // Bước này đã gộp xong các biển Room , Product để gửi qua API
    // ------------ API --------------

    // ------------ API - END --------------
  };

  return (
    <div className={classes.root}>
      <Grid container style={{ justifyContent: 'center' }}>
        <Grid
          style={{ display: roomState.display === true ? 'block' : 'none' }}
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}>
          <RoomDetails
            onSaveRoomDetails={handleSaveRoomDetails}
            roomDetails={roomState.room}
          />
        </Grid>
        <Grid
          style={{ display: roomState.display !== true ? 'block' : 'none ' }}
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}>
          <Product
            roomDetails={roomState.room}
            onAddProduct={handleAddProduct}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateRoom;
