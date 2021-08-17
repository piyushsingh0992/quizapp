import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import HomePage from "./screens/homePage";
import QuizPage from "./screens/quizPage";
import LeaderBoardPage from "./screens/leaderBoardPage";
import LoginPage from "./screens/loginPage";
import Error404Page from "./screens/error404Page";
import PrivateRoute from "./components/privateRoute";
import Toast from "./components/toast";
import ErrorModal from "./components/errorModal";
export default function App() {


  return (
    <div className="app">
      <Toast />
      <ErrorModal />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <PrivateRoute path="/quiz/:quizId" element={<QuizPage />} />
        <Route path="/leaderBoard" element={<LeaderBoardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<Error404Page />} />
      </Routes>
    </div>

  );
}
