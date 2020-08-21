import React from 'react';
import './App.css';

import bgImage from './assets/bg.png'

import Header from './components/Header/Header';

function App() {
  return (
    <div>
      
      <Header />
      <div className="bg-container">
      <img src={bgImage} alt="Bg" className="bg-image"/>
      </div>

    </div>
  );
}

export default App;
