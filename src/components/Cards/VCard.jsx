
import React from 'react';
import PropTypes from 'prop-types';
import { observer } from "mobx-react-lite"
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'auto',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function VCard({ types, heading, image, title }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={image}
          title={title}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {heading}
          </Typography>
          {
            types.map(({ type: { name, url } }) => (
              <Chip
                key={url}
                size="small"
                label={name}
                color="primary"
              />
            ))
          }
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

VCard.propTypes = {
  types: PropTypes.arrayOf(PropTypes.object),
  heading: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
}
VCard.defaultProps = {
  types: [],
  heading: '',
  image: '',
  title: '',
}

export default observer(VCard);
