import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import HomePage from "./Screens/HomePage/homePage";
import QuizPage from "./Screens/QuizPage/quizPage";
import LeaderBoardPage from "./Screens/LeaderBoardPage/leaderBoardPage";
import LoginPage from "./Screens/LoginPage/loginPage";
import Error404Page from "./Screens/Error404Page/error404Page"
export default function App() {


  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz/:quizId" element={<QuizPage />} />
        <Route path="/leaderBoardPage" element={<LeaderBoardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<Error404Page />} />
      </Routes>
    </div>

  );
}
