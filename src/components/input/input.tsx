import React from 'react';
import "./input.css";
import {inputPropsType} from "../../types/types";

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