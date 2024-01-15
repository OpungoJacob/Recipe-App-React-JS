import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from "react-icons/gi"
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

import React from 'react'

function Category() {
  return (
    <List>
        <SLink to={'/Cusisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <NavLink to={'/Cusisine/American'}>
            <FaHamburger  />
            <h4>American</h4>
        </NavLink>
        <NavLink to={'/Cusisine/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </NavLink>
        <NavLink to={'/Cusisine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </NavLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 border-radius: 50%;

`;

export default Category