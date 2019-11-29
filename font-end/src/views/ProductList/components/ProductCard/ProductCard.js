import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { withRouter} from 'react-router-dom';

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Button,
  Divider
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GavelIcon from '@material-ui/icons/Gavel';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles(theme => ({
  root: {},
  imageContainer: {
    height: 150,
    width: 150,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  },
  listButton: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginBottom: '2%'
  }
}));
// console.log("image",imgs)

const ProductCard = props => {
  const { className, product, ...rest } = props;

  const handleJoinRoom = () => {
    props.history.push(`/room/${props.product.id}`)
  }
// console.log("image",imgs.filter(i => i.id === product.pictuer)[0].src)

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <div className={classes.imageContainer}>
          <img alt="Product" className={classes.image} src={product.pictuer} />
        </div>
        <Typography align="center" gutterBottom variant="h4">
          {product.productName}
        </Typography>
        <Typography
          align="center"
          variant="body1"
          style={{ fontWeight: 'bold', fontSize: '35px' }}>
          {product.price}
          {/* {product.description} */}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Grid container justify="space-between">
          <Grid className={classes.statsItem} item>
            <AccessTimeIcon className={classes.statsIcon} />
            <Typography display="inline" variant="body2">
              Bắt đầu : {product.timeStart}
            </Typography>
          </Grid>
          <Grid className={classes.statsItem} item>
            <GavelIcon className={classes.statsIcon} />
            <Typography display="inline" variant="body2">
              Kết thúc : {product.timeEnd}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
      <div className={classes.listButton}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}>
          Chi tiết
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          style={{ backgroundColor: '#4fc34f',color : '#fff' }}
          onClick={handleJoinRoom}
          >
          Tham gia
        </Button>
      </div>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default withRouter(ProductCard);
