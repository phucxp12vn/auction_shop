import React from 'react';
import { makeStyles } from '@material-ui/styles';
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

const Room = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          <Product />
        </Grid>
      </Grid>
    </div>
  );
};

export default Room;
