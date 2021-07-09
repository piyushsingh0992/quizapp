import React from 'react';
import "./activeQuizDetails.css";
import prev from "../../utils/images/icons/prev.svg";
import next from "../../utils/images/icons/next.svg";
import alarm from "../../utils/images/icons/alarm.png";
const ActiveQuizDetails = () => {
    return (
        <div className="activeQuizDetails">

            <div className="activeQuizDetails-index-container">
                <div className="activeQuizDetails-navigation-container-prev">
                    <img src={prev} className="activeQuizDetails-navigation-prev" />
                    <p>
                        Previous Question
                    </p>
                </div>

                <p className="activeQuizDetails-index">
                    Question (3/10)
                </p>
            </div>




            <div className="activeQuizDetails-timer-container">
                <div className="activeQuizDetails-timer">
                    <img src={alarm} />
                    <p>2:00</p>
                </div>
                <div className="activeQuizDetails-navigation-container-next">
                    <img src={next} className="activeQuizDetails-navigation-next" />
                    <p>
                        next Question
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ActiveQuizDetails;