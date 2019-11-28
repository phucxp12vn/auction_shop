import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Product = props => {
  console.log('Product Props', props.roomDetails.auctionId);
  const { className, ...rest } = props;
  const classes = useStyles();

  const [values, setValues] = useState({
    name: '',
    auctionId: '',
    picture: null,
    brand: '',
    price: '',
    description: '',
  });
  const handleChange = event => {
    console.log('Product before Change');
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };


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
      picture: event.target.files[0]
    });
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form autoComplete="off" noValidate>
        <CardHeader
          title="Sản phẩm"
          titleTypographyProps={{
            gutterBottom: 'true',
            variant: 'h2'
          }}></CardHeader>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="  "
                label="Tên phòng"
                margin="dense"
                disabled
                name="name"
                // onChange={handleChange}
                required
                value={props.roomDetails.name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="  "
                label="Mã phòng "
                margin="dense"
                disabled
                name="auctionId"
                //onChange={handleChange}
                required
                value={props.roomDetails.auctionId}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="  "
                label="Tên sản phẩm"
                margin="dense"
                name="name"
                onChange={handleChange}
                required
                // value={values.name}s
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Hình ảnh"
                margin="dense"
                name="image"
                onChange={handleChange}
                required
                value={values.picture === null ? '' : values.picture.name}
                variant="outlined"
                // inputProps={{ type: 'file' }}
              />
              <input
                // accept="image/*"
                className={classes.input}
                style={{ display: 'none' }}
                id="raised-button-file"
                type="file"
                name="picture"
                onInput={onChangeHandler}
              />
              <label htmlFor="raised-button-file">
                <Button
                  variant="raised"
                  component="span"
                  className={classes.button}
                  type="secondary"
                  style={{
                    float: 'right',
                    backgroundColor: '#17669c',
                    color: '#fff'
                  }}>
                  Tải lên
                </Button>
              </label>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Hiệu"
                margin="dense"
                name="brand"
                onChange={handleChange}
                required
                value={values.brand}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Giá"
                margin="dense"
                name="price"
                onChange={handleChange}
                type="number"
                value={values.price}
                variant="outlined"
                inputProps={{ step: 10000 }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Mô tả"
                margin="dense"
                name="description"
                onChange={handleChange}
                multiline
                required
                value={values.description}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions style={{ justifyContent: 'flex-end' }}>
          <Button
            color="primary"
            variant="contained"
            style={{
              backgroundColor: '#17669c',
              color: '#fff'
            }}
            onClick={() => props.onAddProduct(values)}>
            Thêm
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
