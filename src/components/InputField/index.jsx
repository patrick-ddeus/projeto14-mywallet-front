import React from 'react';
import { Input } from './styles';

const InputField = ({ type = "text", placeholder, inputRef, step }) => {
    return (
        <Input ref={inputRef} type={type} placeholder={placeholder} min={0}/>
    );
};

export default InputField;
