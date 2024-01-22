import React from 'react';
import Pages from './pages/Pages';
import Category from './components/Category';
import {BrowserRouter} from 'react-router-dom';
import Search from './components/Search';
import styled from 'styled-components';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Search />
      <Category/>
      <Pages />
      </BrowserRouter>
    </div>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  

`;

export default App