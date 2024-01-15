import React, { useEffect } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { Link, useParams  } from 'react-router-dom';


function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;


    const getCuisine = async(name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=10&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() =>{
        getCuisine('')
    })

  return (
    <div>

    </div>
  )
}

export default Cuisine