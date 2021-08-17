import React, { useEffect, useState } from 'react';
import "./style.css";
import Hero from "../../components/hero";
import QuizCateogry from "../../components/quizCateogry";
import Navbar from "../../components/navbar";
import { apiCall } from '../../apiCall/apiCall';
import Loader from '../../components/loader';
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