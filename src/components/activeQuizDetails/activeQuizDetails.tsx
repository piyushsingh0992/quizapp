import React from 'react';
import "./activeQuizDetails.css";
import prev from "../../utils/images/icons/prev.svg";
import next from "../../utils/images/icons/next.svg";
import alarm from "../../utils/images/icons/alarm.png";
import Button from "../buttton/button";
import moment from "moment";

import { activeQuizDetails } from "../../types/types"


const ActiveQuizDetails = (props: activeQuizDetails) => {
    let timeString = moment.utc(props.time).format('mm:ss');
    return (
        <div className="activeQuizDetails">

            <div className="activeQuizDetails-index-container">
                <div className="activeQuizDetails-navigation-container-prev">
                    <img src={prev} className="activeQuizDetails-navigation-prev" onClick={() => {
                        props.currentQuestionController("PREV");
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
                <Button text="Submit" clickFunction={() => { props.modalDispatch({ type: "SHOW_SUBMIT" }) }} />
                <div className="activeQuizDetails-timer">
                    <img src={alarm} />
                    <p>{timeString}</p>
                </div>
                <div className="activeQuizDetails-navigation-container-next">
                    <img src={next} className="activeQuizDetails-navigation-next"
                        onClick={() => {
                            props.currentQuestionController("NEXT");
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