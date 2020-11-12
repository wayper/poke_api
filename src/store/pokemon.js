import { makeAutoObservable } from "mobx";
import { API } from '../constants';

class Pokemon {
  weight = 0;
  types = [];
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

  fetchData = (url) => {
    this.setLoading(true);
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(({ types, weight }) => {
        console.log(weight);
        // this.types = types;
        this.weight = weight;
      })
      .catch(err => {
        this.setError(err)
      })
      .finally(() => {
        this.setLoading(false);
      })
  }
}

export default new Pokemon();
