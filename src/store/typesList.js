import { makeAutoObservable } from "mobx";
import { API } from '../constants';

export class TypesList {
  count = 0;
  next = null;
  previous = null;
  results = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchData() {
    fetch(`${API}type`)
      .then(response => response.json())
      .then(({ count, next, previous, results }) => {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.results = results;
      })
  }
}

export default new TypesList();
