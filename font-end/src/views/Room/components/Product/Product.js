import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Table from '../Table';
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
  TextField
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
    picture: {
      name: '',
      file: null
    },
    brand: 'Vegeta Brand',
    currentBid: '100000',
    currentWinner: 'Tam',
    description: 'Very cooooool',
    country: 'Namec'
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
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
  const onChangeHandler = event => {
    setValues({
      ...values,
      picture: {
        name: event.target.files[0].name,
        file: event.target.files[0]
      }
    });
  };

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
              <CardMedia
                component="img"
                // style={{ width: '50%' }}
                alt="Contemplative Reptile"
                image="/images/auction-hammer.jpg"
                title="Contemplative Reptile"
              />
            </Grid>
            <Grid item md={8} xs={12}>
              <Typography style={{ marginBottom: '50px' }} variant="h1">
                {values.name}
              </Typography>
              <Grid container spacing={3}>
                <Typography className={classes.typo} variant="h3">
                  {values.brand}
                </Typography>
              </Grid>
              <Grid container spacing={3}>
                <Typography className={classes.typo} variant="h3">
                  {values.description}
                </Typography>
              </Grid>

              <Grid container spacing={3}>
                <Grid item md={4} xs={8} className={classes.gridTypo}>
                  <Typography variant="h4">Giá đấu giá hiện tại</Typography>
                  <Typography className={classes.typo} variant="h3">
                    {values.currentBid} VND
                  </Typography>
                </Grid>
                <Grid item md={4} xs={8} className={classes.gridTypo}>
                  <Typography variant="h4">Người thắng hiện tại</Typography>
                  <Typography className={classes.typo} variant="h3">
                    {values.currentWinner}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>

        <Divider />
        <CardContent>
          <Table />
        </CardContent>
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
