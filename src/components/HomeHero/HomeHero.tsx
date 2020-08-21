import React from 'react'

import './HomeHero.css'

import bgImage from '../../assets/bg.png'

function HomeHero() {
    return (
        <div className="bg-container">
            <img src={bgImage} alt="Background" className="bg-image"/>
      </div>
    )
}

export default HomeHero