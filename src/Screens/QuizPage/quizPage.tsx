import React, { useEffect, useState } from 'react';
import "./quizPage.css";
import Question from "../../components/question/question";
import ActiveQuizDetails from "../../components/activeQuizDetails/activeQuizDetails";
import Navbar from "../../components/navbar/navbar";
import RulesModal from "../../components/rulesModal/rulesModal";
import SubmitModal from "../../components/submitModal/submitModal";
import { quizQuestionsArray } from "../../types/types";
import { apiCall } from '../../apiCall/apiCall';
import Loader from '../../components/loader/loader';
import { useParams } from "react-router-dom";
import moment from "moment";
const QuizPage = () => {
    const [loader, loaderSetter] = useState<boolean>(true);
    const [quizArray, quizArraySetter] = useState<quizQuestionsArray>([]);
    let { quizId } = useParams() as { quizId: string };
    let [time, timeSetter] = useState<number>(2 * 60 * 1000);
    let timeString = moment.utc(time).format('mm:ss');
    const [score, scoreSetter] = useState<number>(0);
    const [currentQuestion, currentQuestionSetter] = useState<number>(0);
    const [showRulesModal, showRulesModalSetter] = useState<boolean>(true);
    const [showSubmitModal, showSubmitSetter] = useState<boolean>(false);

    useEffect(() => {
        (async function () {
            try {
                const response = await apiCall("GET", `quiz/${quizId}`);
                if (response.success === true) {
                    quizArraySetter(response.data.questions)
                    loaderSetter(false);

                }

            } catch (error) {

            }

        })()
    }, [])


    useEffect(() => {

        if (!showRulesModal && time >= 1000) {

            setTimeout(() => { timeSetter(value => value - 1000) }, 1000);
        }

        if (time <= 0) {
            showSubmitSetter(true)
        }
    }, [showRulesModal, time])


    return loader ? <Loader /> : <div className="quizPage">
        <Navbar />
        <ActiveQuizDetails currentQuestion={currentQuestion + 1}
            totalQuestion={quizArray.length} currentQuestionSetter={currentQuestionSetter} timeString={timeString} />


        <div className="quizQuestionsContainer" style={{ transform: `translateX(-${currentQuestion * 100}vw)` }}>
            {quizArray?.map((item) => {
                return <Question img={item.img} question={item.question} options={item.options} />
            })}
        </div>


        {showRulesModal && <RulesModal showRulesModalSetter={showRulesModalSetter} />}
        {showSubmitModal && <SubmitModal time={time} timeString={timeString} showSubmitSetter={showSubmitSetter} />}
        {/*  */}
    </div>


};

export default QuizPage;