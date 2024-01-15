import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { Link, useParams  } from 'react-router-dom';


function Cuisine() {

    const API_KEY = process.env.REACT_APP_API_KEY;


    const getCuisine = async(name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=10&cuisine=${name}`);
    }

  return (
    <div>

    </div>
  )
}

export default Cuisine