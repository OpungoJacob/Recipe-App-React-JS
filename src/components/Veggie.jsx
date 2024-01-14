import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

function Veggie() {

  const [popular, setPopular] = useState([]);

  // const API_KEY='178b89a5516a49859ebe5a39bf1afbe2';
  const API_KEY = process.env.REACT_APP_API_KEY;
  // console.log("API_KEY:", API_KEY); 

    useEffect(() => {
        getPopular();
    }, []); 

    const getPopular = async () => {
      // checking if there is an item in local storage
        const check = localStorage.getItem('popular');

        if(check) {
          setPopular(JSON.parse(check))
        } else {
          //fetching data from api endpoint
          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`);
          const data = await api.json();
          
          localStorage.setItem("popular", JSON.stringify(data.recipes));
          setPopular(data.recipes);
          console.log(data.recipes)
        
        }
          //NB: In local storage, you can only save strings


         // console.log(data);
        // console.log("API_KEY:", API_KEY);       
       
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
                <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
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

  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-weight: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
 
  `;

  const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
  `;


export default Veggie