import React from 'react'
import { useState, useEffect } from 'react';

function Searched() {

  const API_KEY = process.env.REACT_APP_API_KEY;

  const [serachedRecipes, setSearchedRecipes] = useState([]);

  const getSearched = async(name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`);
    const recipes = await data.json();
    setCuisine(recipes.results);
};

  return (
    <div>Searched</div>
  )
}

export default Searched