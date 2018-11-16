// API Key: 452bd0b5e11b1a34c11e392ab1d170c4 
// URL endpoint: https://www.food2fork.com/api/search

import Search from './models/model.search';
import * as searchView from './views/view.search'
import {elements} from './views/view.base';

/* Global state of the app
 * - Search Object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
*/

const state = {};

// Event listeners
elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

// Function implementations

// FN's inside event listeners
async function controlSearch() {
  // TODO:
  // 1) Get the query from the view controller
  const query = searchView.getInput(); //

  // 2) If there is a query create a search object and add it to state
  if (query) {
    state.search = new Search(query);
  }

  // 3) Prepare UI for results
  searchView.clearInput();

  // 4) Search for recipes
  await state.search.getResults();

  // 5) Render results on UI
  searchView.renderResults(state.search.result);
}