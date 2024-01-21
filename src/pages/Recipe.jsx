import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {

    const API_KEY = process.env.REACT_APP_API_KEY;

    let params = useParams();

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${API_KEY}`);
    }

  return (
    <div>Recipe</div>
  )
}

export default Recipe