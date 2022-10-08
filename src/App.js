import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react';
import './App.css';
import Cover from './Components/cover/Cover';
import Navbaruno from './Components/Navbaruno/Navbaruno';
import Nosotros from './Components/Nosotros/Nosotros'
import Slider from './Components/Slider/Slider';
import Info from './Components/Info/Info';
import Footer from './Components/Footer/Footer';
import Testimonios from './Components/Testimonios/testimonios';
import { LogoutButton } from './Components/Botonauth/Logout';
import { Profile } from './Components/Botonauth/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const { isAuthenticated } = useAuth0();

  return (
    

    <div className="App">
     {isAuthenticated ? (
          <>
           <LogoutButton/>
           <Profile/>
           </>
          ) :
           ( <Navbaruno/>)}
    
       <Cover />
      <Nosotros/>
      <Slider />
      <Testimonios/>
      <Info />
      <Footer />
     
    </div>
    
  );
}

export default App;
