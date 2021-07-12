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
const QuizPage = () => {
    const [loader, loaderSetter] = useState<boolean>(true);
    const [quizArray, quizArraySetter] = useState<quizQuestionsArray>([]);
    let { quizId } = useParams() as { quizId: string };

    const [score, scoreSetter] = useState<number>(0);
    const [currentQuestion, currentQuestionSetter] = useState<number>(0);

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

    return loader ? <Loader /> : <div className="quizPage">
        <Navbar />
        <ActiveQuizDetails currentQuestion={currentQuestion + 1}
            totalQuestion={quizArray.length} currentQuestionSetter={currentQuestionSetter}/>


        <div className="quizQuestionsContainer" style={{ transform: `translateX(-${currentQuestion * 100}vw)` }}>

            {quizArray?.map((item) => {
                return <Question img={item.img} question={item.question} options={item.options} />
            })}
        </div>


        {/* <RulesModal /> */}
        {/* <SubmitModal /> */}
    </div>


};

export default QuizPage;