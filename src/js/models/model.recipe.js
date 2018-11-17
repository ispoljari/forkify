import axios from 'axios';
import {API_KEY, PROXY} from '../config';

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    try {
      const recipe = await axios(`${PROXY}https://www.food2fork.com/api/get?key=${API_KEY}&q=${this.id}`);
    } catch (err) {
      console.log(err);
    }
  }
}