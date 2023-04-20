import React from 'react';
import { Input } from './styles';

const InputField = ({ required, type = "text", placeholder, inputRef, step }) => {
    return (
        <Input ref={inputRef} required={required} type={type} placeholder={placeholder} min={0}/>
    );
};

export default InputField;
