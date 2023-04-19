import React from 'react';
import { Input } from './styles';

const InputField = ({ type = "text", placeholder, formRef }) => {
    return (
        <Input ref={formRef} type={type} placeholder={placeholder} />
    );
};

export default InputField;
