import React from 'react';

import Header from './components/Header/Header';
import HomeHero from './components/HomeHero/HomeHero';
import Routes from './routes'
import Footer from './components/Footer/Footer';

import './App.css';


function App() {
  return (
    <div className="main"> 
      <HomeHero/>

      <div className="content">
      <Header />
      < Routes />
      <Footer />  
      </div>

    </div>
  );
}

export default App;
