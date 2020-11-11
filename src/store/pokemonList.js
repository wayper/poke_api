import { makeAutoObservable } from "mobx";
import { API } from '../constants';

class PokemonList {
  count = 0;
  next = null;
  previous = null;
  results = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchData() {
    fetch(`${API}pokemon?limit=100`)
      .then(response => response.json())
      .then(({ count, next, previous, results }) => {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.results = results;
      })
  }
}

export default new PokemonList();
