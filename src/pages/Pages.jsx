import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import {Route, Routes} from 'react-router-dom';
import Searched from './Searched';
import { Search } from '@mui/icons-material';

function Pages() {
  return (
    
    <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path ="/cuisine/:cuisine" element={<Cuisine />}/>
        <Route path="/searched/:search" element={<Searched />}/>
    </Routes>
   
  )
}

export default Pages