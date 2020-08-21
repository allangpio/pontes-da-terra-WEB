import React from 'react';

import './Form.css';
import Input from '../Input/Input';

const Form: React.FC = () => {
    return (
        <div className="form-container">
        <h2>Login</h2>
        <form>
            <Input name="email" type="text" id="email" label="Email" />            
            <Input name="password" type="text" id="password" label="Senha" />          
        </form>
        </div>
    )
}

export default Form;