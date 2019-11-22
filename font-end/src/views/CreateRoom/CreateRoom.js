import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

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
      roomName: '',
      desc: '',
      startBid: '',
      bidJump: 0,
      startTime: '2017-05-24T10:30',
      endTime: '2017-05-24T10:30'
    }
  });

  const handleSaveRoomDetails = room => {
    console.log(room);
    setRoomState(roomState => ({
      display: false,
      room
    }));
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
          <RoomDetails onSaveRoomDetails={handleSaveRoomDetails} />
        </Grid>
        <Grid
          style={{ display: roomState.display !== true ? 'block' : 'none ' }}
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}>
          <Product roomDetails={roomState.room} />
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateRoom;
