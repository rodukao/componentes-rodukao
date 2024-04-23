import React, { useState } from 'react';
import FormInput from './FormInput';
import FormSubmit from './FormSubmit';
import './LoginForm.css';

const LoginForm = ({placeholderLogin = 'E-mail', placeholderPassword = 'Senha'}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        //lógica de autenticação
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <img alt="Logo" src="/logo-r.png" />
            <FormInput
                name="email"
                type="email"
                value={email}
                placeholder={placeholderLogin}
                onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
                name="password"
                type="password"
                value={password}
                placeholder={placeholderPassword}
                onChange={(e) => setPassword(e.target.value)}
            />
            <FormSubmit text="Entrar" />
            <p>
                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    //lógica para recuperar a senha
                    console.log("Esqueci minha senha clicado");
                }}>Esqueci minha senha</a>
            </p>
        </form>
    )
}

export default LoginForm;