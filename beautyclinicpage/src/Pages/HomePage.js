import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import About from '../Components/About/About';
import Treatments from '../Components/Treatments/Treatments';
import Team from '../Components/Team/Team';
import Contato from '../Components/Contato/Contato';
import Footer from '../Components/Footer/Footer';
import React from 'react';

function HomePage() {
  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Treatments/>
      <Team/>
      <Contato/>
      <Footer/>
    </>  
  );
}

export default HomePage;