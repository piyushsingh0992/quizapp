import React, { useEffect, useState } from 'react';
import "./homePage.css";
import Hero from "../../components/hero/hero";
import QuizCateogry from "../../components/quizCateogry/quizCateogry";
import Navbar from "../../components/navbar/navbar";
import { apiCall } from '../../apiCall/apiCall';
import Loader from '../../components/loader/loader';
import { quizCardArray } from "../../types/types";
import { useError } from '../../contexts/errorContext/errorContext';

const HomePage = () => {
    const [loader, loaderSetter] = useState<boolean>(true);
    const [quizCateogry, quizCateogrySetter] = useState<quizCardArray>([]);
    const { errorState, errorDispatch } = useError();


    useEffect(() => {
        (async function () {
            
                const response = await apiCall("GET", "cateorgy");
                if (response.success === true) {

                    quizCateogrySetter(response.data.quizCategory);
                    loaderSetter(false);
                } else {
                    errorDispatch("ERROR");
                }

            

        })()

    }, [])
    return (
        loader ? <Loader /> :
            <div className="homePage">
                <Navbar />
                <Hero />
                <QuizCateogry quizCateogry={quizCateogry} />
            </div>
    );
};

export default HomePage;