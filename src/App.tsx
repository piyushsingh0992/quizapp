import { useEffect, useState } from "react";

import "./app.css";
import HomePage from "./Screens/HomePage/homePage";
import QuizPage from "./Screens/QuizPage/quizPage"
export default function App() {


  return (
    <div className="app">
      {/* <HomePage /> */}
      <QuizPage />
    </div>
  );
}
