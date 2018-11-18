// API Key: 452bd0b5e11b1a34c11e392ab1d170c4 
// URL endpoint: https://www.food2fork.com/api/search

import Search from './models/model.search';
import Recipe from './models/model.recipe'
import * as searchView from './views/view.search'
import {elements, renderLoader, clearLoader} from './views/view.base';

/* Global state of the app
 * - Search Object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
*/

const state = {};

/* ------- SEARCH CONTROLLER ------- */
/* --------------------------------- */

// Event listeners
elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

elements.resultsPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);

    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

// Function implementations

// FN's inside event listeners
async function controlSearch() {
  // 1) Get the query from the view controller
  const query = searchView.getInput(); //

  // 2) If there is a query create a search object and add it to state
  if (query) {
    state.search = new Search(query);
  
    // 3) Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    try {
      // 4) Search for recipes
      await state.search.getResults();
  
      // 4.1) Remove loader spinner
      clearLoader(elements.searchRes);
  
      // 5) Render results on UI
      searchView.renderResults(state.search.result);
    } catch (error) {
      console.log(error);
    }
  }
}

/* ------- RECIPE CONTROLLER ------- */
/* --------------------------------- */

['hashchange', 'load'].forEach(event => {
  window.addEventListener(event, controlRecipe);
});

async function controlRecipe() {
  const id = window.location.hash.replace('#','');

  if (id) {
    // TODO:
    // Prepare UI for changes

    // Create new recipe object
    state.recipe = new Recipe(id);
    
    try {
      // Get recipe data
      await state.recipe.getRecipe();
      state.recipe.parseIngredients();

      // Calculate servings and time
      state.recipe.calcTime();
      state.recipe.calcServings();
  
      // Render the recipe
      console.log(state.recipe); 
    } catch (error) {
      console.log(`Something went wrong in fetching the recipe! Event object: ${error}`);
    }
  }
}

// recipe.getRecipe();
// console.log(recipe);