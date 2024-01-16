import styled from "styled-components"
import { useState } from "react"
import { FaSearch } from "react-icons/fa";
import { Form } from "react-router-dom";


function Search() {
  return (
    <FormStyle>
        <input type="text" />
    </FormStyle>
  )
}

const FormStyle = styled.div`
    margin: 0rem 20rem;
    position: relative;
    width: 100%;
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
        padding: 1rem 3 rem;
        border: none;
        border-radius: 1rem;
        outline: none;
    }
    svg{
        position" absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%)
    }
`;

export default Search