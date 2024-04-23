import React from 'react';
import './FormSubmit.css';

const FormSubmit = ({text, className, onClick, style}) => {
    return (
        <button
            type="submit"
            className={className + ' form-submit-style'}
            onClick={onClick}
            style={style}
        >
            {text}    
        </button>
    )
}

export default FormSubmit;