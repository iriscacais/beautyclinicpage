import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import TreatmentPage from '../Pages/TreatmentPage';

function Routers() {
    return (
      <Routes>
        <Route exact path="/" element={ <HomePage/> } />
        <Route exact path="/procedimento/:name" element={ <TreatmentPage/> } />
      </Routes>  
    );
  }

export default Routers;
