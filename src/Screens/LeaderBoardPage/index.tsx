import React, { useEffect, useState } from 'react';
import "./leaderBoardPage.css";
import Navbar from "../../components/navbar";
import LeaderBoard from "../../components/leaderBoard";
import { apiCall } from '../../apiCall/apiCall';
import Loader from '../../components/loader';
import { useError } from '../../contexts/errorContext/errorContext';


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
    const { errorState, errorDispatch } = useError();

    useEffect(() => {
        debugger;
        (async function () {
            
                const response = await apiCall("GET", `leaderBoard`);
                debugger;
                if (response.success === true) {
                    leaderBoardArraySetter(response.data.leaderBoards);
                    loaderSetter(false);
                }else{
                    errorDispatch("ERROR");
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