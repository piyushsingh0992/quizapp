import React from 'react';
import "./homePage.css";
import Hero from "../../components/hero/hero";
import QuizCateogry from "../../components/quizCateogry/quizCateogry";
import Navbar from "../../components/navbar/navbar";
const homePage = () => {
    return (
        <div className="homePage">
            <Navbar />
            <Hero />
            <QuizCateogry />
        </div>
    );
};

export default homePage;