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
import Button from '../../components/buttton/button';
import ScoreModal from '../../components/scoreModal/scoreModal';
import { useAuth } from "../../contexts/authContext/authContext";

type scoreArray = number[]

const QuizPage = () => {
    const [loader, loaderSetter] = useState<boolean>(true);
    const [quizArray, quizArraySetter] = useState<quizQuestionsArray>([]);
    let { quizId } = useParams() as { quizId: string };
    // let [time, timeSetter] = useState<number>(2 * 60 * 1000);
    let [time, timeSetter] = useState<number>(5 * 1000);
    let timeString = moment.utc(time).format('mm:ss');
    const [scoreArray, scoreArraySetter] = useState<scoreArray>(
        []
    );

    const { auth } = useAuth();
    const [currentQuestion, currentQuestionSetter] = useState<number>(0);
    const [showRulesModal, showRulesModalSetter] = useState<boolean>(true);
    const [showSubmitModal, showSubmitSetter] = useState<boolean>(false);
    const [showScoreModal, showScoreSetter] = useState<boolean>(false);
    const [submitModalText, submitModalTextSetter] = useState<string>("");

    useEffect(() => {
        (async function () {
            try {
                const response = await apiCall("GET", `quiz/${quizId}`);
                if (response.success === true) {
                    quizArraySetter(response.data.questions);
                    scoreArraySetter(new Array(response.data.questions.length).fill(0));
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

    }, [showRulesModal, time]);

    useEffect(() => {
        if (time <= 0) {
            console.log("showSubmitModal ->", showSubmitModal);
            debugger;
            showSubmitSetter(value => !value)
        }
    }, [time])



    console.log("scoreArray ->", scoreArray);
    return loader ? <Loader /> : <div className="quizPage">
        <Navbar />

        <ActiveQuizDetails showSubmitSetter={showSubmitSetter} currentQuestion={currentQuestion + 1}
            totalQuestion={quizArray.length} currentQuestionSetter={currentQuestionSetter} timeString={timeString} />


        <div className="quizQuestionsContainer" style={{ transform: `translateX(-${currentQuestion * 100}vw)` }}>
            {quizArray?.map((item, index) => {
                return <Question questionIndex={index} scoreArraySetter={scoreArraySetter} img={item.img} question={item.question} options={item.options} />
            })}
        </div>


        {showRulesModal && <RulesModal showRulesModalSetter={showRulesModalSetter} />}
        {showSubmitModal && <SubmitModal timeSetter={timeSetter} submitModalTextSetter={submitModalTextSetter} showScoreSetter={showScoreSetter} loaderSetter={loaderSetter} quizId={quizId} time={time} timeString={timeString} showSubmitSetter={showSubmitSetter} score={scoreArray.reduce((a, b) => { return a + b }, 0)} userKey={auth.userDetails!.userKey} />}

        {showScoreModal && <ScoreModal submitModalText={submitModalText} quizId={quizId} />}

    </div>


};

export default QuizPage;