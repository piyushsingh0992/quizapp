import React, { useEffect, useState } from 'react';
import "./homePage.css";
import Hero from "../../components/hero/hero";
import QuizCateogry from "../../components/quizCateogry/quizCateogry";
import Navbar from "../../components/navbar/navbar";
import { apiCall } from '../../apiCall/apiCall';
import Loader from '../../components/loader/loader';
import { quizDetails, quizCards } from "../../types/types";

const HomePage = () => {
    const [loader, loaderSetter] = useState<boolean>(true);
    const [quizCateogry, quizCateogrySetter] = useState<quizCards >([]);

    useEffect(() => {
        (async function () {
            try {
                const response = await apiCall("GET", "cateorgy");
                if (response.success === true) {
                    
                    quizCateogrySetter(response.data.quizCategory);
                    loaderSetter(false);
                }

            } catch (error) {

            }

        })()

    }, [])
    return (
        loader ? <Loader /> :
            <div className="homePage">
                <Navbar />
                <Hero />
                <QuizCateogry quizCateogry={quizCateogry}/>
            </div>
    );
};

export default HomePage;