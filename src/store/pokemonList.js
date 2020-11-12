import { makeAutoObservable } from "mobx";
import { API } from '../constants';

class PokemonList {
  count = 0;
  next = null;
  previous = null;
  results = [];
  error = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setError = (error) => {
    this.error = error;
  }

  setLoading = (bool) => {
    this.isLoading = bool;
  }


  fetchPokemonData = (url) => {
    fetch(url)
      .then(response => response.json())
      .then((result) => {
        this.results = this.results.map((item) => {
          if (item.url === url) {
            return {
              ...item,
              ...result,
            }
          }
          return item;
        });
      })
      .catch(err => {
        this.setError(err)
      })
  }

  fetchData = ({ limit }) => {
    this.setLoading(true);
    fetch(`${API}pokemon${limit ? '?limit=' + limit : ''}`)
      .then(response => response.json())
      .then(({ count, next, previous, results }) => {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.results = results;

        results.forEach(({ url }) => this.fetchPokemonData(url));
      })
      .catch(err => {
        this.setError(err)
      })
      .finally(() => {
        this.setLoading(false);
      })
  }
}

export default new PokemonList();
