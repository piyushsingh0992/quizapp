import React from 'react';
import "./input.css";
type inputPropsType = {
    label: string; inputType?: string; value: any, onChangeFunction: (value: string) => void
}

const Input = ({ label, inputType, value, onChangeFunction }: inputPropsType) => {
    return (
        <span className="input-container">
            <input
                className="input"
                type={inputType ? inputType : "text"}
                value={value}
                required
                onChange={(e) => { onChangeFunction(e.target.value) }}
            />
            <label>{label}</label>
        </span>
    );
};

export default Input;