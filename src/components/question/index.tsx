import React, { useState } from 'react';
import Option from "../option";
import "./style.css";
import { quizQuestionType, selectType } from "../../types/types";



const Question = (props: quizQuestionType) => {
    const [select, selectSetter] = useState<selectType>(
        [
            true, true, true, true,
        ]
    )

    return (
        <div className="questions-container">
            <img src={props.img} className="question-img" />
            <h1 className="question">
                {props.question} </h1>

            <div className="options-container">
                {props.options.map((item, index) => {
                    return <Option currentQuestionController={props.currentQuestionController}  questionIndex={props.questionIndex}
                        scoreArraySetter={props.scoreArraySetter} index={index} text={item.text} isRight={item.isRight} selected={select[index]} selectSetter={selectSetter} />
                })}
            </div>
        </div>
    );
};

export default Question;