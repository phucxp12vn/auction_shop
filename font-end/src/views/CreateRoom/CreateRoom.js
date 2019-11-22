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

  const [display, setDisplay] = useState(true);

  const handleChange = event => {
    setDisplay(false);
  };

  return (
    <div className={classes.root}>
      <Grid container style={{ justifyContent: 'center' }}>
        <Grid
          style={{ display: display === true ? 'block' : 'none' }}
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}>
          <RoomDetails createRoom={handleChange} />
        </Grid>
        <Grid
          style={{ display: display !== true ? 'block' : 'none ' }}
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}>
          <Product />
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateRoom;
