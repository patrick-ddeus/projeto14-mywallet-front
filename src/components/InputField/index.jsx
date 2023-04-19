import React from 'react';
import { Input } from './styles';

const InputField = ({ type = "text", value, onChange, placeholder, formRef }) => {
    return (
        <Input ref={formRef} type={type} value={value} onChange={onChange} placeholder={placeholder} />
    );
};

export default InputField;
