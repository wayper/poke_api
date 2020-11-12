import React from 'react';
import { observer } from "mobx-react-lite"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import VCard from './VCard';

import { useStores } from '../../store';

const useStyles = makeStyles((theme) => ({
  loaderWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
}));

function VCardList() {
  const { pokemons: { results, isLoading } } = useStores();

  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
        {(
          isLoading
            ? <Loader />
            : <Grid container spacing={4}>
                {
                  results.map(({ name, url, types }) => (
                    <VCard
                      key={url}
                      url={url}
                      types={types}
                      image={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
                      title={name}
                      heading={name}
                    />
                  ))
                }
              </Grid>
        )}
    </Container>
  )
}

function Loader() {
  const classes = useStyles();

  return (
    <Container className={classes.loaderWrap}>
      <CircularProgress/>
    </Container>
  )
}

export default observer(VCardList);
