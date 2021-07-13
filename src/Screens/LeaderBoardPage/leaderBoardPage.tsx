import React, { useEffect, useState } from 'react';
import "./leaderBoardPage.css";
import Navbar from "../../components/navbar/navbar";
import LeaderBoard from "../../components/leaderBoard/leaderBoard";
import { apiCall } from '../../apiCall/apiCall';
import Loader from '../../components/loader/loader';



type scoreItemType = {
    score: number;
    user: {
        userName: string,
        userId: string,
        password: string
    }

}

type leaderBoardType = {
    quizName: string,
    quizId: string,
    scoreArray: scoreItemType[],
    _id: string
}

type leaderBoardTypeArray = leaderBoardType[]



const LeaderBoardPage = () => {
    const [loader, loaderSetter] = useState<boolean>(true);
    const [leaderBoardArray, leaderBoardArraySetter] = useState<leaderBoardTypeArray>([]);
    useEffect(() => {
        (async function () {
            try {
                const response = await apiCall("GET", `leaderBoard`);
                if (response.success === true) {
                    leaderBoardArraySetter(response.data.leaderBoards);
                    loaderSetter(false);
                }

            } catch (error) {
                debugger;
            }

        })()
    }, [])


    return loader ? <Loader /> : <div className="leaderBoardPage">
        <Navbar />
        <h1>Leader Board</h1>
        <div className="leaderBoard-container">
            {leaderBoardArray.map((item: leaderBoardType) => {

                return <LeaderBoard quizName={item.quizName} scoreArray={item.scoreArray} quizId={item.quizId} />
            })}

        </div>

    </div>
};

export default LeaderBoardPage;