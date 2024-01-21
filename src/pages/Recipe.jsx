import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {

    const API_KEY = process.env.REACT_APP_API_KEY;

    let params = useParams();
    const [details, setDetails] = useState({});

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
    };

    useEffect(() =>{
        fetchDetails();
    }, [params.name]);

  return (
    <div>{details.title}</div>
  )
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    h2{
        margin-bottom: 2rem;
    }
    li{
        font-size
    }
`

export default Recipe