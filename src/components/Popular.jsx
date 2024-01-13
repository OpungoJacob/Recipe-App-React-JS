import { useEffect } from "react";
// import dotenv from "dotenv";
// dotenv.config();


function Popular() {

  // const API_KEY='178b89a5516a49859ebe5a39bf1afbe2';

    useEffect(() => {
        getPopular();
    }, []); 

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}&number=10`);
        const data = await api.json();
        console.log(data);
        
    }

  return (
    <div>Popular</div>
  )
}

export default Popular