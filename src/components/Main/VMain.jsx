
import React, { useEffect } from 'react';
import HeroContent from '../HeroContent';
import Pagination from '../Pagination/VPagination';
import Cards from '../Cards';

import { useStores } from '../../store';

export default function Main() {
  const { pokemons } = useStores();

  useEffect(() => {
    pokemons.fetchData();
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
