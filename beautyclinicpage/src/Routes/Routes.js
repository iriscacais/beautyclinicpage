import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Treat from '../Components/Treatments/Treat';

function Routers() {
    return (
      <Routes basename={process.env.PUBLIC_URL}>
        <Route exact path="/" element={ <HomePage/> } />
        <Route exact path="/procedimento/:procedimento" element={ <Treat/> } />
      </Routes>  
    );
  }

export default Routers;
