import React from 'react';
import { observer } from "mobx-react-lite"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import VCard from './VCard';

import { useStores } from '../../store';

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
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function VCardList() {
  const { pokemons } = useStores();

  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {pokemons.results.map(({ name, url }) => (
          <VCard
            key={url}
            image={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
            title={name}
            heading={name}
          />
        ))}
      </Grid>
    </Container>
  )
}

export default observer(VCardList);
