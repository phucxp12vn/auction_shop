import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { api } from '../../helpers';
import { withRouter, Switch, Redirect } from 'react-router-dom';

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

var auctionInfo = {
  name: ''
};

const CreateProduct = props => {
  console.log('CreateProduct Props', props);

  const { className, ...rest } = props;

  const classes = useStyles();

  const [product, setValues] = useState({
    name: '',
    auction_id: props.match.params.auctionId,
    price: '',
    description: '',
    brand: ''
  });

  // Gọi API lấy thông tin phòng, gán response cho auctionInfo.
  useEffect(() => {
    if (auctionInfo.name === '') {
      auctionInfo.name = 'after useEffect()';
      // api.getAuctionInfo(product.auction_id)
      //   .then(res => {
      //     auctionInfo.name = res.data.result.name;
      //   })
      //   .catch(err => {
      //   })
    }
  }, []);

  const handleChange = event => {
    console.log('CreateProduct before Change');
    setValues({
      ...product,
      [event.target.name]: event.target.value
    });
  };

  const handleCreateProduct = () => {
    api
      .addProduct(product)
      .then(response => {
        if (response.request.status == '201') {
          props.history.push(`/products/`);
        }
      })
      .catch(error => {
        return <Redirect exact from="/" to="/sign-in" />;
      });
  };

  const onChangeHandler = event => {
    setValues({
      ...product,
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
                name="roomName"
                required
                value={auctionInfo.name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              {/* <TextField
                fullWidth
                helperText="  "
                label="Mô tả phòng"
                margin="dense"
                disabled
                name="roomDesc"
                // onChange={handleChange}
                required
                // value={props.roomDetails.desc}
                variant="outlined"
              /> */}
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
                // value={product.name}
                variant="outlined"
              />
            </Grid>
            {/* <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Hình ảnh"
                margin="dense"
                name="image"
                onChange={handleChange}
                required
                value={product.picture === null ? '' : product.picture.name}
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
                onChange={onChangeHandler}
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
            </Grid> */}
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Hiệu"
                margin="dense"
                name="brand"
                onChange={handleChange}
                required
                value={product.brand}
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
                value={product.price}
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
                value={product.description}
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
            onClick={handleCreateProduct}>
            Thêm
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

CreateProduct.propTypes = {
  className: PropTypes.string
};

export default CreateProduct;
