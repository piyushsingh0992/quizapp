import React from 'react';
import "./quizPage.css";
import Question from "../../components/question/question";
import ActiveQuizDetails from "../../components/activeQuizDetails/activeQuizDetails";
import Navbar from "../../components/navbar/navbar";
import RulesModal from "../../components/rulesModal/rulesModal";
import SubmitModal from "../../components/submitModal/submitModal";
const QuizPage = () => {
    return (
        <div className="quizPage">
            <Navbar />
            <ActiveQuizDetails />
            <Question />
            {/* <RulesModal /> */}
            <SubmitModal />
        </div>
    );
};

export default QuizPage;