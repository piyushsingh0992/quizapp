import React from 'react';
import "./option.css";
import {optionPropType} from "../../types/types";
const Option = ({ text, isRight }: optionPropType) => {
    return (
        <div className="option ">
            <p>{text}</p>
        </div>
    );
};

export default Option;