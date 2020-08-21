import React from 'react'


import './HomeContent.css'
import Button from '../../components/Button/Button'

function HomeContent(){
    return (
        <div className="content-wrapper">
            <h1>Pontes <br/>
             <span>da terra</span></h1>
             <p>Uma plataforma para conectar pequenos produtores, associações e pessoas interessadas em contribuir mais algum texto muito bem escrito</p>
             <div className="btn-container">
                 <Button linkPath='/search' nameClass='btn-primary' title='Procurar'/>
                 <Button linkPath='/login' nameClass='btn-outline' title='Cadastrar'/>
             </div>
        </div>
    )
}

export default HomeContent