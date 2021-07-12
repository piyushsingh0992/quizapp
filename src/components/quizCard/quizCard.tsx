import React from 'react';
import "./quizCard.css";
import { quizCardProps } from "../../types/types";
import { useNavigate } from "react-router-dom";
import Button from "../buttton/button";
const QuizCard = ({ quizImg, quizName, quizId }: quizCardProps) => {
    const navigate = useNavigate();

    function clickHandler() {
        navigate(`/quiz/${quizId}`);
    }

    return (
        <div className="quizCard ">
            <img src={quizImg} />
            <h1>{quizName}</h1>
            <Button text="start quiz" clickFunction={clickHandler} />
        </div>
    );
};

export default QuizCard;