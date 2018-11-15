// API Key: 452bd0b5e11b1a34c11e392ab1d170c4 
// URL endpoint: https://www.food2fork.com/api/search

import Search from '../js/models/model.search';

/* Global state of the app
 * - Search Object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
*/

const state = {};

// Event listeners
const searchField = document.querySelector('.search');
searchField.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

// Function implementations

// FN's inside event listeners
async function controlSearch() {
  // TODO:
  // 1) Get the query from the view controller
  const query = 'cookie' //

  // 2) If there is a query create a search object and add it to state
  if (query) {
    state.search = new Search(query);
  }

  // 3) Prepare UI for results

  // 4) Search for recipes
  await state.search.getResults();

  // 5) Render results on UI
  console.log(state.search.result);
}