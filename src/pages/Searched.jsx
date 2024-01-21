import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Searched() {

  const API_KEY = process.env.REACT_APP_API_KEY;

  const [serachedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async(name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`);
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
};

  useEffect(() => {
    getSearched(params.search);
  },[params.search]);

  return (
    <div>Searched</div>
  )
}

export default Searched