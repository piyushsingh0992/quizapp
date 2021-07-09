import React from 'react';
import "./quizPage.css";
import Question from "../../components/question/question";
import ActiveQuizDetails from "../../components/activeQuizDetails/activeQuizDetails";
import Navbar from "../../components/navbar/navbar";
const QuizPage = () => {
    return (
        <div className="quizPage">
            <Navbar />
            <ActiveQuizDetails />
            <Question />
        </div>
    );
};

export default QuizPage;