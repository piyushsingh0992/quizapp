import React from 'react';
import "./option.css";
import { optionPropType } from "../../types/types";
const Option = (props: optionPropType) => {
    return (
        <div className={props.selected ? "option selected" : "option notSelected"} onClick={() => {
            props.selectSetter(value => {
                return value.map((item, index) => {
                    if (index === props.index) {
                        return true
                    }
                    return false;
                })

            })
        }}>
            <p>{props.text}</p>
        </div>
    );
};

export default Option;