import React from 'react';
import "./option.css";
import { optionPropType } from "../../types/types";
import Question from '../question';
const Option = (props: optionPropType) => {


    function clickHandler() {
        props.selectSetter(value => {
            return value.map((item, index) => {
                if (index === props.index) {
                    return true
                }
                return false;
            })
        })
        props.scoreArraySetter(value => {
            return value.map((item, index) => {
                if (index === props.questionIndex) {
                    return props.isRight ? 4 : 0;
                }
                return item;
            })
        })


        props.currentQuestionController("NEXT");
    }

    return (
        <div className={props.selected ? "option selected" : "option notSelected"} onClick={() => {
            clickHandler()
        }}>
            <p>{props.text}</p>
        </div>
    );
};

export default Option;