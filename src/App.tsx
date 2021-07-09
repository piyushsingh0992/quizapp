import { useEffect, useState } from "react";

import "./app.css";
import HomePage from "./Screens/HomePage/homePage";
import QuizPage from "./Screens/QuizPage/quizPage";
import LeaderBoardPage from "./Screens/LeaderBoardPage/leaderBoardPage";
import LoginPage from "./Screens/LoginPage/loginPage";
import Error404Page from "./Screens/Error404Page/error404Page"
export default function App() {


  return (
    <div className="app">
      {/* <HomePage /> */}
      {/* <QuizPage /> */}
      {/* <LeaderBoardPage /> */}
      {/* <LoginPage /> */}
      <Error404Page />
    </div>

  );
}
