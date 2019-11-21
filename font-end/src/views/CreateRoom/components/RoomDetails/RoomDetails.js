import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
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
  LinearProgress
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

  const user = {
    name: 'Shen Zhi',
    city: 'Los Angeles',
    country: 'USA',
    timezone: 'GTM-7',
    avatar: '/images/avatars/avatar_11.png'
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
            <TextField
              fullWidth
              helperText="  "
              label="Tên Phòng"
              margin="dense"
              name="roomName"
              // onChange={handleChange}
              required
              // value={values.firstName}
              variant="outlined"
            />
            <TextField
              fullWidth
              helperText="  "
              label="Mô tả"
              margin="dense"
              name="desc"
              multiline={true}
              // onChange={handleChange}
              // required
              // value={values.firstName}
              variant="outlined"
            />
            {/* <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1">
              {user.city}, {user.country}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1">
              {moment().format('hh:mm A')} ({user.timezone})
            </Typography> */}
          </div>
          {/* <Avatar className={classes.avatar} src={user.avatar} /> */}
        </div>
        {/* <div className={classes.progress}>
          <Typography variant="body1">Profile Completeness: 70%</Typography>
          <LinearProgress value={70} variant="determinate" />
        </div> */}
      </CardContent>
      <Divider />
      {/* <CardActions>
        <Button className={classes.uploadButton} color="primary" variant="text">
          Upload picture
        </Button>
        <Button variant="text">Remove picture</Button>
      </CardActions> */}
    </Card>
  );
};

RoomDetails.propTypes = {
  className: PropTypes.string
};

export default RoomDetails;
