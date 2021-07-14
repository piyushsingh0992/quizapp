import React, { useEffect, useState, useReducer, Dispatch } from 'react';
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
import ScoreModal from '../../components/scoreModal/scoreModal';
import { useAuth } from "../../contexts/authContext/authContext";
import { updadteLeaderBoard } from "../../utils/leaderBoardFunction/leaderBoardFunction";
import { scoreArray } from "../../types/types";

import { modalHandler } from "./common";
import { useError } from '../../contexts/errorContext/errorContext';


const QuizPage = () => {
    const [loader, loaderSetter] = useState<boolean>(true);
    const [quizArray, quizArraySetter] = useState<quizQuestionsArray>([]);
    let { quizId } = useParams() as { quizId: string };
    let [time, timeSetter] = useState<number>(2 * 60 * 1000);
    const [scoreArray, scoreArraySetter] = useState<scoreArray>(
        []
    );
    const { auth } = useAuth();
    const [currentQuestion, currentQuestionSetter] = useState<number>(0);
    const [submitModalText, submitModalTextSetter] = useState<string>("");
    const { errorState, errorDispatch } = useError();


    const [modal, modalDispatch] = useReducer(modalHandler, {
        showRulesModal: true,
        showSubmitModal: false,
        showScoreModal: false,
    })

    function currentQuestionController(navigation: "NEXT" | "PREV") {
        switch (navigation) {
            case "NEXT":
                if (currentQuestion < quizArray.length - 1) {
                    currentQuestionSetter(value => value + 1);
                }
                return;
            case "PREV":
                if (currentQuestion >= 1) {
                    currentQuestionSetter(value => value - 1);
                }

        }

    }


    useEffect(() => {
        (async function () {
            try {
                const response = await apiCall("GET", `quiz/${quizId}`);
                if (response.success === true) {
                    quizArraySetter(response.data.questions);
                    scoreArraySetter(new Array(response.data.questions.length).fill(0));
                    loaderSetter(false);
                } else {
                    errorDispatch("ERROR");
                }

            } catch (error) {

                errorDispatch("ERROR");

            }

        })()
    }, [])


    useEffect(() => {
        if (!modal.showRulesModal && !modal.showScoreModal && !modal.showSubmitModal && time >= 1000) {
            setTimeout(() => { timeSetter(value => value - 1000) }, 1000);
        }

    }, [modal.showRulesModal, modal.showSubmitModal, time]);

    useEffect(() => {
        if (time <= 0) {
            updadteLeaderBoard(scoreArray.reduce((a, b) => { return a + b }, 0), quizId, loaderSetter, submitModalTextSetter, modalDispatch)
        }
    }, [time])



    return loader ? <Loader /> : <div className="quizPage">
        <Navbar />
        <ActiveQuizDetails currentQuestionController={currentQuestionController} modalDispatch={modalDispatch} currentQuestion={currentQuestion + 1}
            totalQuestion={quizArray.length} time={time} />

        <div className="quizQuestionsContainer" style={{ transform: `translateX(-${currentQuestion * 100}vw)` }}>
            {quizArray?.map((item, index) => {
                return <Question currentQuestionController={currentQuestionController} questionIndex={index} scoreArraySetter={scoreArraySetter} img={item.img} question={item.question} options={item.options} />
            })}
        </div>
        {modal.showRulesModal && <RulesModal modalDispatch={modalDispatch} />}
        {modal.showSubmitModal && <SubmitModal time={time} modalDispatch={modalDispatch} timeSetter={timeSetter} submitModalTextSetter={submitModalTextSetter} loaderSetter={loaderSetter} quizId={quizId} score={scoreArray.reduce((a, b) => { return a + b }, 0)} />}
        {modal.showScoreModal && <ScoreModal submitModalText={submitModalText} quizId={quizId} />}
    </div>


};

export default QuizPage;