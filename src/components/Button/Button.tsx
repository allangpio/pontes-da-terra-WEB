import React from 'react';
import {Link} from 'react-router-dom';

import './Button.css'

interface ButtonProps {
    nameClass: string,
    title: string,
    linkPath: string
}

const Button: React.FC<ButtonProps> = ({nameClass, title, linkPath}) => {
    return(
        <Link to={linkPath}className={`btn ${nameClass}`}> 
            {title}
        </Link>
    )
}
 export default Button