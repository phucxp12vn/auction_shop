import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { Link as RouterLink, withRouter } from 'react-router-dom';
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

const useStyles = makeStyles(theme => ({
  root: {},
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

const RoomDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [values, setValues] = useState(props.roomDetails);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
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
                  name="roomName"
                  onChange={handleChange}
                  required
                  value={values.roomName}
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
                  value={values.desc}
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
                  value={values.startBid}
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
                  value={values.bidJump}
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
                  value={values.timeStart}
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
                  value={values.timeEnd}
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
          onClick={() => props.onSaveRoomDetails(values)}>
          Tạo phòng
        </Button>
      </CardActions>
    </Card>
  );
};

RoomDetails.propTypes = {
  className: PropTypes.string
};

export default RoomDetails;
