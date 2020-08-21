import React from 'react'
import {FaSpotify, FaFacebook, FaInstagram} from 'react-icons/fa'
import { IconContext } from "react-icons";

import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <IconContext.Provider 
                value={{ 
                    color: "#b86c40", 
                    className: "global-class-name",
                    size: '2rem',
                    style: {marginLeft: '1.5em'}
                    }}>
                <a href="#"> <FaSpotify /> </a>
                <a href="#"><FaFacebook/></a>
                <a href="#"><FaInstagram/></a>
                
                
 
            </IconContext.Provider>
        
        </div>
    )
}

export default Footer