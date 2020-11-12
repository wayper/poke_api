
import React, { useEffect } from 'react';
import HeroContent from '../HeroContent';
import Pagination from '../Pagination';
import Cards from '../Cards';
import { colors } from '@material-ui/core';

console.log(colors);

import { useStores } from '../../store';

export default function Main() {
  const { pokemons } = useStores();

  useEffect(() => {
    pokemons.fetchData({limit: 200});
  }, [])

  return (
    <main>
      <HeroContent />
      <Pagination />
      <Cards />
      <Pagination />
    </main>
  );
}
