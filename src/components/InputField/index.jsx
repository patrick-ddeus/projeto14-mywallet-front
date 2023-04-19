import React from 'react';
import { Input } from './styles';

const InputField = ({ type = "text", placeholder, inputRef }) => {
    return (
        <Input ref={inputRef} type={type} placeholder={placeholder} />
    );
};

export default InputField;
