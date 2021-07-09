import React from 'react';
import "./leaderBoardPage.css";
import Navbar from "../../components/navbar/navbar";
import LeaderBoard from "../../components/leaderBoard/leaderBoard";
const LeaderBoardPage = () => {
    return (
        <div className="leaderBoardPage">
            <Navbar />
            <h1>Leader Board</h1>
            <div className="leaderBoard-container">
                <LeaderBoard />
                <LeaderBoard />
                <LeaderBoard />
                <LeaderBoard />
                <LeaderBoard />
                <LeaderBoard />
                <LeaderBoard />
            </div>

        </div>
    );
};

export default LeaderBoardPage;