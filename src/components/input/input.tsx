import React from 'react';

type inputPropsType = {
    label: string; inputType?: string; value: any
}

const Input = ({ label, inputType, value }: inputPropsType) => {
    return (
        <span className="input-container">
            <input
                className="input"
                type={inputType ? inputType : "text"}
                value={value}
                required
            />
            <label>{label}</label>
        </span>
    );
};

export default Input;