import React from 'react';
import "./quizCard.css";
import { quizCardProps } from "./quizCardType";

import Button from "../buttton/button";
const QuizCard = ({ quizImg, quizName }: quizCardProps) => {

    return (
        <div className="quizCard ">
            <img src={quizImg} />
            <h1>{quizName}</h1>
            <Button text="start quiz"/>
        </div>
    );
};

export default QuizCard;