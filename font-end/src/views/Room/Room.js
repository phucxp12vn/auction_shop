import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import mockData from './data';

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
    start_bid: 100000,
    bidAmount: 10000,
    last_bid: 0,
    timeStart: '',
    timeEnd: '',
    seller: '',
    status: '',
    bidHistory: rows,
    product: {
      name: 'Nón Vegeta',
      brand: 'Vegeta Brand',
      currentBid: 100000,
      currentWinner: 'Tam',
      description: 'Very cooooool',
      country: 'Namec',
      bidPrice: null
    }
  });

  const handleBid = bidInfo => {
    // Tại đây sẽ gọi API và nhận được reposonse là bidHistory. từ đó gán vào bidHistory cũ.
    let temp = roomState.bidHistory;
    temp.push(bidInfo);
    setRoomState({
      ...roomState,
      bidHistory: temp
    });
  };

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
