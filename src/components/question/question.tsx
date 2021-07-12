import React from 'react';
import Option from "../option/option";
import "./question.css";
import { quizQuestionType } from "../../types/types"
const Question = (props: quizQuestionType) => {
    return (
        <div className="questions-container">
            <img src={props.img} className="question-img" />
            <h1 className="question">
                {props.question} </h1>

            <div className="options-container">
                {props.options.map((item) => {
                    return <Option text={item.text} isRight={item.isRight} />
                })}
            </div>
        </div>
    );
};

export default Question;