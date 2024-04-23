import React from 'react';
import './FormInputRadio.css';

const FormInputRadio = ({label, className, name, value, checked, onChange}) => {
    return (
        <label className='radio-container'>
            {label}
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <span className='checkmark'></span>
        </label>
    );
};

export default FormInputRadio;