// API Key: 452bd0b5e11b1a34c11e392ab1d170c4 
// URL endpoint: https://www.food2fork.com/api/search

import axios from 'axios';


async function getResults(query) {
  const API_KEY = '452bd0b5e11b1a34c11e392ab1d170c4';
  const PROXY = 'https://cors-anywhere.herokuapp.com/';

  try {
    const res = await axios(`${PROXY}https://www.food2fork.com/api/search?key=${API_KEY}&q=${query}`);
    const recipes = res.data.recipes;
  } catch(err) {
    alert(err);
  }

  return recipes;
}

getResults('chicken')
  .then(recipes => {
    console.log(recipes);
  });