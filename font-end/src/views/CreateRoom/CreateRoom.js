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
import moment from 'moment';
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
  console.log('CreateRoom props', props);
  const classes = useStyles();

  const [roomState, setRoomState] = useState({
    name: '',
    start_bid: '',
    bidAmount: 0,
    timeStart: '',
    timeEnd: '',
  });

  const handleSaveRoomDetails = () => {
    console.log('ROOOOOMMM', roomState);
    api.createRoom(roomState)
          .then((response) => {
            if (response.request.status == "201") {
              var auctionId = response.data.auctionId;
              props.history.push(`/create-product/` + auctionId);
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
    if (event.target.name === "timeStart" || event.target.name === "timeEnd") {
      setRoomState({
        ...roomState,
        [event.target.name]: moment(event.target.value).format("YYYY-MM-DD HH:mm:ss")
      });
    } else {
      setRoomState({
        ...roomState,
        [event.target.name]: event.target.value
      });
    }

    
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
                    <Grid item md={12} xs={12}>
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
                        label="Giá khởi điểm"
                        helperText="  "
                        margin="dense"
                        name="start_bid"
                        onChange={handleChange}
                        type="number"
                        value={roomState.start_bid}
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
                        name="bidAmount"
                        onChange={handleChange}
                        type="number"
                        value={roomState.bidAmount}
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
                        // value={roomState.timeStart}
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
                        onChange={handleChange}
                        //value={roomState.timeEnd}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true
                        }}
                        // step="1"
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
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(CreateRoom);
