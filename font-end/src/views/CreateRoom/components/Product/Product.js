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
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    name: '',
    picture: {
      name: '',
      file: null
    },
    brand: '',
    price: '',
    description: 'Alabama',
    country: 'USA'
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
          title="Sản phẩm"
          titleTypographyProps={{ gutterBottom: 'true', variant: 'h2' }}
        />
        <Divider />
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
                // value={values.name}
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
                value={values.picture.name}
                variant="outlined"
                // inputProps={{ type: 'file' }}
              />
              {/* --------------TEST--------------------------- */}
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
              {/* --------------TEST--------------------------- */}
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
            {/* <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select State"
                margin="dense"
                name="state"
                onChange={handleChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined">
                {states.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid> */}
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Mô tả"
                margin="dense"
                name="description"
                onChange={handleChange}
                multiline
                // required
                // value={values.country}
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
