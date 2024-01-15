import React, { useEffect } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { Link, useParams  } from 'react-router-dom';


function Cuisine() {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();


    const getCuisine = async(name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=10&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() =>{
        getCuisine(params.type);
        console.log(params)
    }, [params.type])

  return (
    <div>

    </div>
  )
}

export default Cuisine