import {elements} from './view.base';

// 1) Read the data from the form input field
export const getInput = () => elements.searchInput.value;

// 2) Render results
export const renderResults = recipes => {
  recipes.forEach(renderRecipe);
}

// 3) Clear text from input field
export const clearInput = () => {
  elements.searchInput.value = '';
}

// 4) Clear the previous results from the HTML (DOM)
export const clearResults = () => {
  while(elements.searchResList.firstChild) {
    elements.searchResList.removeChild(elements.searchResList.firstChild);
  }
  // OR (slower variant) elements.searchResList.innerHTML = '';
}

// 2.1 Render individual recipe
function renderRecipe(recipe) {
  const markup = 
    `<li>
      <a class="results__link" href="${recipe.recipe_id}">
        <figure class="results__fig">
          <img src="${recipe.image_url}" alt="${recipe.title}">
        </figure>
        <div class="results__data">
          <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
          <p class="results__author">${recipe.publisher}</p>
        </div>
      </a>
    </li>`;

  elements.searchResList.insertAdjacentHTML('beforeend', markup);
}

function limitRecipeTitle(title, limit = 17) {
  const newTitle = [];
  if (title.length > limit) {
    title.split(' ').reduce((accu, curr) => {
      if (accu + curr.length <= limit) {
        newTitle.push(curr)
      }
      return accu + curr.length;
    }, 0);
    return `${newTitle.join(' ')} ...`
  }
  return title;
}