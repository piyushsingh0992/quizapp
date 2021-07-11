import React, { useState, useEffect } from 'react';
import "./quizCateogry.css";


import QuizCard from "../quizCard/quizCard";
import leftArrow from "../../utils/images/icons/leftArrow.svg";
import rightArrow from "../../utils/images/icons/rightArrow.svg";
import { quizDetails, quizCateogry, quizCards } from "./quizCateogryType";


const QuizCateogry = () => {

    const [position, positionSetter] = useState<number>(0);

    const [quizArray, quizArraySetter] = useState<quizCards | null>(null);

    useEffect(() => {
        quizArraySetter(quizCateogry);
    }, [])






    function slideLeft() {
        if (position !== 0) {
            positionSetter(value => value + 18);
        }

    }
    function slideRight() {
        console.log("position ->",position);
        if (position >-(2 * 18)) {
            positionSetter(value => value - 18);
        }


    }

    return (
        <div className="quiz-cateogry" >
            <img
                src={leftArrow}
                className="left-arrow"
                onClick={() => {
                    slideLeft();
                }}
            />
            <img
                src={rightArrow}
                className="right-arrow"
                onClick={() => {
                    slideRight();
                }}
            />
            <div className="quiz-card-container" style={{ left: `${position}rem` }} >

                {quizArray?.map(({ quizImg, quizName,quizId }: quizDetails, index) => {
                    return <QuizCard quizImg={quizImg} quizName={quizName} quizId={quizId}/>
                })}
            </div>
        </div>
    );
};

export default QuizCateogry;