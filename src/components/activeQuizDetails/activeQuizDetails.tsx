import React, { Dispatch } from 'react';
import "./activeQuizDetails.css";
import prev from "../../utils/images/icons/prev.svg";
import next from "../../utils/images/icons/next.svg";
import alarm from "../../utils/images/icons/alarm.png";
import Button from "../buttton/button";

type activeQuizDetails = {
    currentQuestion: number
    , totalQuestion: number,
    currentQuestionSetter: Dispatch<React.SetStateAction<number>>,
    timeString: string,
    showSubmitSetter: Dispatch<React.SetStateAction<boolean>>
}
const ActiveQuizDetails = (props: activeQuizDetails) => {
    return (
        <div className="activeQuizDetails">

            <div className="activeQuizDetails-index-container">
                <div className="activeQuizDetails-navigation-container-prev">
                    <img src={prev} className="activeQuizDetails-navigation-prev" onClick={() => {
                        if (props.currentQuestion > 1) {
                            props.currentQuestionSetter(value => value - 1);
                        }
                    }} />
                    <p>
                        Previous Question
                    </p>
                </div>

                <p className="activeQuizDetails-index">
                    Question ({props.currentQuestion}/{props.totalQuestion})
                </p>
            </div>




            <div className="activeQuizDetails-timer-container">
                <Button text="Submit" clickFunction={() => { props.showSubmitSetter(value => !value) }} />
                <div className="activeQuizDetails-timer">
                    <img src={alarm} />
                    <p>{props.timeString}</p>
                </div>
                <div className="activeQuizDetails-navigation-container-next">
                    <img src={next} className="activeQuizDetails-navigation-next"
                        onClick={() => {
                            if (props.currentQuestion < props.totalQuestion) {
                                props.currentQuestionSetter(value => value + 1);
                            }
                        }} />
                    <p>
                        next Question
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ActiveQuizDetails;