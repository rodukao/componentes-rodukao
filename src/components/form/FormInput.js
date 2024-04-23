import React, { useState } from 'react';
import './FormInput.css';

function FormInput({label, type = 'text', name, value, onChange, placeholder}){

    const [isValid, setIsValid] = useState(true);

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const handleInputChange = (event) => {
        const { value } = event.target;
        if (type === 'email') {
            setIsValid(validateEmail(value));
        }
        onChange(event);  // Chame a função onChange original passada como prop
    };

    const validFormTypes = ['text', 'email', 'password'];
    const inputType = validFormTypes.includes(type) ? type : 'text';

    return(
        <div className='form-input'>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type={inputType}
                name={name}
                id={name}
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
                className={isValid ? '' : 'invalid'}
            />
            {!isValid && <div className="error-message">Por favor insira um e-mail válido.</div>}
        </div>
    );
}

export default FormInput;