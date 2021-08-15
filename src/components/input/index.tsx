import React from 'react';
import "./style.css";
import { inputPropsType } from "../../types/types";

const Input = ({ label, type, value, onChangeFunction, name }: inputPropsType) => {
    return (
        <span className="input-container">
            <input
                name={name}
                className="input"
                type={type ? type : "text"}
                value={value}
                required
                onChange={(e) => { onChangeFunction(e) }}
            />
            <label>{label}</label>
        </span>
    );
};

export default Input;