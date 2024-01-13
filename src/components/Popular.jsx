import { useEffect, useState } from "react";
//  import dotenv from "dotenv";
// dotenv.config();


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
        
    }

  return (
    <div>Popular</div>
  )
}

export default Popular