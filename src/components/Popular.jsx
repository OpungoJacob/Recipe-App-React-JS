import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

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
            
          <Wrapper>
            <h3>Popular Picks</h3>

              <Splide options ={{
                perPage: 4,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: "5rem",
              }}>          
                {popular.map((recipe) => {
                    return(
                      <SplideSlide>
                      <Card>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                      </Card>
                      </SplideSlide>
                  );
                })}
             </Splide>
          </Wrapper>
        
      
      </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem; 
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
 
  `;

export default Popular