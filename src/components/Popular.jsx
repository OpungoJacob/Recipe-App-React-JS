import { useEffect, useState } from "react";
import styled from "styled-components";


function Popular() {

  const [popular, setPopular] = useState([]);

  // const API_KEY='178b89a5516a49859ebe5a39bf1afbe2';
  const API_KEY = process.env.REACT_APP_API_KEY;
  // console.log("API_KEY:", API_KEY); 

    useEffect(() => {
        getPopular();
    }, []); 

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`);
        const data = await api.json();
        // console.log(data);
        // console.log("API_KEY:", API_KEY);
        setPopular(data.recipes);
        console.log(data.recipes)
        
    }

  return (
    <div>
      
      {popular.map((recipe) =>{
        return(
          <wrapper>
            <h3>Popular Picks</h3>
            {popular.map((recipe) => {
              return(
                <card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </card>
              );
            })}
          </wrapper>
        );
      })}
      
      </div>
  )
}

const wrapper = styled.div`
  margin: 4rem 0rem; 
`;

const card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  `;

export default Popular