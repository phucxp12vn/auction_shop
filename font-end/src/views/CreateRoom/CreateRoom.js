import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  TextField,
  TextareaAutosize,
  Link,
  LinearProgress,
  Grid
} from '@material-ui/core';
import uuid from 'uuid/v1';
import { withRouter, Switch, Redirect } from 'react-router-dom';

import { Product, RoomDetails } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  details: {
    display: 'flex'
  },
  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  }
}));

const CreateRoom = props => {
  const classes = useStyles();

  const [roomState, setRoomState] = useState({
    // auctionId: uuid(),
    name: '',
    desc: '',
    startBid: '',
    bidAmount: 0,
    timeStart: '2017-05-24T10:30:30',
    timeEnd: '2017-05-24T10:30:30',
    seller: '',
    status: '',
    createAt: '',
    updateAt: ''
  });

  const handleSaveRoomDetails = () => {
    // console.log('ROOOOOMMM', room);
    // setRoomState(roomState => ({
    //   ...roomState,
    //   display: false,
    //   room
    // }));

    // Gửi API tạo phòng tại chỗ này
    props.history.push(`/create-product/${10}`);
    // => Response gồm ID của phòng

    return <Redirect exact from="/" to="/sign-in" />;
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

  const handleChange = event => {
    setRoomState({
      ...roomState,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className={classes.root}>
      <Grid container style={{ justifyContent: 'center' }}>
        <Grid
          // style={{ display: roomState.display === true ? 'block' : 'none' }}
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}>
          {/* <RoomDetails
            onSaveRoomDetails={handleSaveRoomDetails}
            roomDetails={roomState}
          /> */}

          {/* ------------------- Test ------------------------ */}
          <Card>
            <CardHeader
              title="Thông tin phòng"
              titleTypographyProps={{ gutterBottom: 'true', variant: 'h2' }}
            />
            <Divider />
            <CardContent>
              <div className={classes.details}>
                <div>
                  <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        helperText="  "
                        label="Tên Phòng"
                        margin="dense"
                        name="name"
                        onChange={handleChange}
                        required
                        value={roomState.name}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        helperText="  "
                        label="Mô tả"
                        margin="dense"
                        name="desc"
                        multiline
                        onChange={handleChange}
                        value={roomState.desc}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Giá khởi điểm"
                        helperText="  "
                        margin="dense"
                        name="startBid"
                        onChange={handleChange}
                        type="number"
                        value={roomState.startBid}
                        variant="outlined"
                        inputProps={{ step: 10000 }}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        label="Bước nhảy"
                        helperText="  "
                        margin="dense"
                        name="bidJump"
                        onChange={handleChange}
                        type="number"
                        value={roomState.bidJump}
                        variant="outlined"
                        inputProps={{ step: 10000 }}
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        helperText="  "
                        id="datetime-local"
                        label="Bắt đầu"
                        name="timeStart"
                        type="datetime-local"
                        step={1}
                        value={roomState.timeStart}
                        onChange={handleChange}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true
                        }}
                        style={{ marginBottom: '20px' }}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        fullWidth
                        helperText="  "
                        id="datetime-local"
                        label="Kết thúc"
                        name="timeEnd"
                        type="datetime-local"
                        value={roomState.timeEnd}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true
                        }}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </div>
              </div>
            </CardContent>
            <Divider />
            <CardActions style={{ justifyContent: 'flex-end' }}>
              <Button
                className={classes.uploadButton}
                color="secondary"
                variant="contained"
                onClick={handleSaveRoomDetails}>
                Tạo phòng
              </Button>
            </CardActions>
          </Card>
          {/* ------------------- Test - End --------------------- */}
        </Grid>
        {/* <Grid
          style={{ display: roomState.display !== true ? 'block' : 'none ' }}
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}>
          <Product roomDetails={roomState} onAddProduct={handleAddProduct} />
        </Grid> */}
      </Grid>
    </div>
  );
};

export default withRouter(CreateRoom);
