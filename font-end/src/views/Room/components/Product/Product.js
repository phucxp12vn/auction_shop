import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Table from '../Table';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import GavelIcon from '@material-ui/icons/Gavel';
import uuid from 'uuid/v1';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Divider,
  Grid,
  Button,
  Typography,
  TextField,
  Icon
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Product = props => {
  const { className, ...rest } = props;

  const useStyles = makeStyles(theme => ({
    root: {},
    typo: {
      marginBottom: theme.spacing(2)
    },
    gridTypo: {
      textAlign: 'center'
    }
  }));

  const classes = useStyles();

  const [values, setValues] = useState({
    name: 'Nón Vegeta',
    brand: 'Vegeta Brand',
    currentBid: 100000,
    currentWinner: 'Tam',
    description: 'Very cooooool',
    country: 'Namec',
    bidPrice: null,
    user: 'thipho'
  });

  const handleChange = event => {
    if (
      event.target.name === 'bidPrice' &&
      event.target.value <= values.currentBid
    )
      setValues({
        ...values
      });
    else
      setValues({
        ...values,
        [event.target.name]: event.target.value
      });
  };

  const onSubmitBid = () => {
    setValues({
      ...values
    });
    props.onBid({
      id: uuid(),
      userName: values.user,
      bidPrice: values.bidPrice,
      dateTime: '31-12-2019'
    });
  };

  useEffect(() => console.log(values), [values]);
  const states = [
    {
      value: 'alabama',
      label: 'Alabama'
    },
    {
      value: 'new-york',
      label: 'New York'
    },
    {
      value: 'san-francisco',
      label: 'San Francisco'
    }
  ];

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form autoComplete="off" noValidate>
        <CardHeader
          title="Đấu giá"
          titleTypographyProps={{ gutterBottom: 'true', variant: 'h2' }}
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              <Card>
                <CardMedia
                  component="img"
                  // style={{ width: '50%' }}
                  alt="Contemplative Reptile"
                  image="/images/auction-hammer.jpg"
                  title="Contemplative Reptile"
                />
                <Typography
                  style={{ marginBottom: '50px', textAlign: 'center' }}
                  variant="h1">
                  {values.name}
                </Typography>
                <Typography className={classes.typo} variant="h3">
                  {values.brand}
                </Typography>
                <Typography className={classes.typo} variant="h3">
                  {values.description}
                </Typography>
                <Grid container>
                  <Grid item md={6} xs={12} className={classes.gridTypo}>
                    <Typography variant="h4">Giá đấu giá hiện tại</Typography>
                    <Typography className={classes.typo} variant="h3">
                      {values.currentBid} VND
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={12} className={classes.gridTypo}>
                    <Typography variant="h4">Người thắng hiện tại</Typography>
                    <Typography className={classes.typo} variant="h3">
                      {values.currentWinner}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid style={{ textAlign: 'center' }}>
                  <TextField
                    // fullWidth
                    label="Đấu giá"
                    margin="dense"
                    name="bidPrice"
                    onChange={handleChange}
                    type="number"
                    value={
                      values.bidPrice === null
                        ? values.currentBid + 10000
                        : values.bidPrice
                    }
                    variant="outlined"
                    inputProps={{ step: 10000 }}
                    style={{ marginRight: '20px' }}
                  />
                  <Fab variant="extended" onClick={onSubmitBid}>
                    <GavelIcon />
                  </Fab>
                </Grid>
              </Card>
            </Grid>
            <Grid item md={8} xs={12}>
              <Table bidHistory={props.bidHistory} />
            </Grid>
          </Grid>
        </CardContent>

        <Divider />
        <CardContent></CardContent>
        <Divider />
        <CardActions style={{ justifyContent: 'flex-end' }}>
          <Button
            color="primary"
            variant="contained"
            style={{
              backgroundColor: '#17669c',
              color: '#fff'
            }}>
            Lưu
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

Product.propTypes = {
  className: PropTypes.string
};

export default Product;
