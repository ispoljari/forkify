import axios from 'axios';
import {API_KEY, PROXY} from '../config';

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    try {
      const res = await axios(`${PROXY}https://www.food2fork.com/api/get?key=${API_KEY}&rId=${this.id}`);

      this.title = res.data.recipe.title;
      this.author = res.data.recipe.publisher;
      this.img = res.data.recipe.image_url;
      this.url = res.data.recipe.source_url;
      this.ingredients = res.data.recipe.ingredients;
    } catch (err) {
      console.log(err);
    }
  }

  calcTime() {
    // Assume that for each 3 ingredients we need 15 minutes to prepare it
    const numIng = this.ingredients.length;
    const periods = Math.ceil(numIng/3);
    this.time = periods*15;
  }
}