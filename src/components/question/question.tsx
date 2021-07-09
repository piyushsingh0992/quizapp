import React from 'react';
import Option from "../option/option";
import marvel from "../../utils/images/backgroundImages/marvel.jpg";
import "./question.css"
const Question = () => {
    return (
        <div className="questions-container">

            <img src={marvel} className="question-img" />
            <h1 className="question">
                What is the name of the Shinigami who steals a Death Note and amuses himself by watching Light use it?
            </h1>

            <div className="options-container">
                <Option text="100 situps 100 pushups 100 squats 10 Km run" isRight={true} />
                <Option text=" Fasting every other day Cycling 15 Km Boxing" isRight={true} />
                <Option text="Gym rat cardio and lifting Protein only diet" isRight={true} />
                <Option text="No sleep Exercise from sunrise to sunset" isRight={true} />
            </div>
        </div>
    );
};

export default Question;