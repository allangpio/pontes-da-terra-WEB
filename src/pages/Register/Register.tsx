import React from 'react'

import './Register.css'
import Input from '../../components/Input/Input'
import FormButton from '../../components/FormButton/FormButton';
import Button from '../../components/Button/Button';

function Register() {
    return (
    <div className="form-container">
        <h2>Registrar</h2>
        <form>
            <fieldset>
                <div className="input-container">
                    <Input type="text" id="name" name="name" label="Nome" />
                </div>
                <div className="input-container">
                    <Input type="text" id="last-name" name="last-name" label="Sobrenome" />
                </div>       
            </fieldset>
            <Input name="email" type="text" id="email" label="Email" />            
            <Input name="password" type="text" id="password" label="Senha" />
            <Input name="check-password" type="text" id="check-password" label="Confirmar senha" />
            
            <FormButton title="Registrar" />  
           
        </form>
        <Button linkPath="/login" title="Login" nameClass="btn-outline" /> 
        <a href="/" className="goBackLink">&larr;Voltar</a>
        </div>
    )
}

export default Register;