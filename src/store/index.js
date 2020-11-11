import React from "react";
import types from './typesList';
import pokemons from './pokemonList';

export const storesContext = React.createContext({
  types,
  pokemons,
});

export const useStores = () => React.useContext(storesContext);
