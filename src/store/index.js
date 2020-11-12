import React from "react";
import types from './typesList';
import pokemon from './pokemon';
import pokemons from './pokemonList';

export const storesContext = React.createContext({
  types,
  pokemon,
  pokemons,
});

export const useStores = () => React.useContext(storesContext);
