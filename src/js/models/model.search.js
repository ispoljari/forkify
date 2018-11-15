import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const API_KEY = '452bd0b5e11b1a34c11e392ab1d170c4';
    const PROXY = 'https://cors-anywhere.herokuapp.com/';

    try {
      const res = await axios(`${PROXY}https://www.food2fork.com/api/search?key=${API_KEY}&q=${this.query}`);
      this.result = res.data.recipes;
    } catch(err) {
      alert(err);
    }
  }
}