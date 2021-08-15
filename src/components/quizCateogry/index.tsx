import React, { useState, useEffect } from 'react';
import "./style.css";
import QuizCard from "../quizCard";
import leftArrow from "../../assets/images/icons/leftArrow.svg";
import rightArrow from "../../assets/images/icons/rightArrow.svg";
import { quizDetails, quizCardArray } from "../../types/types";


const QuizCateogry = (props: { quizCateogry: quizCardArray }) => {


    const [position, positionSetter] = useState<number>(0);


    function slideLeft() {
        if (position !== 0) {
            positionSetter(value => value + 18);
        }

    }
    function slideRight() {

        if (position > -(2 * 18)) {
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
            <div id="quiz" className="quiz-card-container" style={{ left: `${position}rem` }} >

                {props.quizCateogry.map(({ quizImg, quizName, quizId }: quizDetails, index) => {
                    return <QuizCard quizImg={quizImg} quizName={quizName} quizId={quizId} />
                })}
            </div>
        </div>
    );
};

export default QuizCateogry;