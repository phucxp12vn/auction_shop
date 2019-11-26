import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import uuid from 'uuid/v1';

import { Product, RoomDetails } from './components';
import { api } from '../../helpers';


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
      roomId: '',
      roomName: '',
      desc: '',
      startBid: '',
      bidJump: 0,
      startTime: '2017-05-24T10:30',
      endTime: '2017-05-24T10:31'
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
    // var data = {
    //   name: 'room name',
    //   start_bid: '5000',
    //   bidAmount: '50',
    //   last_bid: 0,
    //   timeStart: '2019-11-11 00:00:00',
    //   timeEnd: '2019-12-12 00:00:00'
    // };
    api.createRoom(room)
          .then((response) => {
            if (response.request.status == "201") {
              room['roomId'] = response.data.auctionId;
              setRoomState(roomState => ({
                ...roomState,
                display: false,
                room
              }));
            }
          })
          .catch(error => console.log(error));
  };

  const handleAddProduct = product => {
    console.log('Producttttttt', product);
    api.createRoom(product)
          .then((response) => {
            if (response.request.status == "201") {
              setRoomState(roomState => ({
                ...roomState,
                product
              }));
            }
          })
          .catch(error => console.log(error));
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
