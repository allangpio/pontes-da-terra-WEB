import React from 'react';


import './FormButton.css'

interface FormButtonProps {    
    title: string,
}

const FormButton: React.FC<FormButtonProps> = ({title}) => {
    return(
        <button type='submit' className='form-btn'> 
            {title}
        </button>
    )
}
 export default FormButton;