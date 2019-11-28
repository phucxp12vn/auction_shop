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
import { api } from '../../helpers';


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
<<<<<<< Updated upstream
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
=======
  console.log('CreateRoom props', props);
  const classes = useStyles();

  const [roomState, setRoomState] = useState({
    name: '',
    start_bid: '',
    bidAmount: 0,
    timeStart: '2017-05-24 10:30:00',
    timeEnd: '2017-05-25 10:30:00',
>>>>>>> Stashed changes
  });

  const handleSaveRoomDetails = () => {
    console.log('ROOOOOMMM', roomState);
    api.createRoom(roomState)
          .then((response) => {
            if (response.request.status == "201") {
              var auctionId = response.data.auctionId;
              props.history.push(`/create-product/${` + auctionId +`}`);
            }
          })
          .catch(error => {
            return <Redirect exact from="/" to="/sign-in" />
          });
          
  };

  const handleAddProduct = product => {
    console.log('Producttttttt', product);
    api.addProduct(product)
          .then((response) => {
            if (response.request.status == "201") {
              
            }
          })
          .catch(error => console.log(error));
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
<<<<<<< Updated upstream
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
=======
                        label="Giá khởi điểm"
                        helperText="  "
                        margin="dense"
                        name="start_bid"
                        onChange={handleChange}
                        type="number"
                        value={roomState.start_bid}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                        name="bidJump"
                        onChange={handleChange}
                        type="number"
                        value={roomState.bidJump}
=======
                        name="bidAmount"
                        onChange={handleChange}
                        type="number"
                        value={roomState.bidAmount}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                        step={1}
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          {/* ------------------- Test - End --------------------- */}
=======
>>>>>>> Stashed changes
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(CreateRoom);
