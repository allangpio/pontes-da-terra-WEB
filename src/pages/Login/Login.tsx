import React from 'react';

import './Login.css';
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button';
import FormButton from '../../components/FormButton/FormButton'

const Login: React.FC = () => {
    return (
        <div className="form-container">
        <h2>Login</h2>
        <form>
            <Input name="email" type="text" id="email" label="Email" />            
            <Input name="password" type="text" id="password" label="Senha" />
            <div className="form-options">
                <div className="checkbox-container">           
                <input type="checkbox" value="remember" id="rembember"/>   
                <label htmlFor="remember">Lembrar-me</label> 
                </div>   
                <a href="#">Esqueci minha senha</a>
            </div> 
            <FormButton title="Entrar" />  
           
        </form>
        <Button linkPath="/register" title="Cadastrar" nameClass="btn-outline" /> 
        <a href="/" className="goBackLink">&larr;Voltar</a>
        </div>
    )
}

export default Login;