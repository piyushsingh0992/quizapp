import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";
type scoreItemType = {
    score: number;
    user: {
        userName: string,
        userId: string,
        password: string
    }

}

type leaderBoardPropType = {
    quizName: string
    scoreArray: scoreItemType[]
    quizId: string
}

const leaderBoard = (props: leaderBoardPropType) => {

    return (
        <div className="leaderBoard">
            <Link to={`/quiz/${props.quizId}`}>
                <h1 >{props.quizName}</h1>
            </Link>
            <table className="leaderBoard-table">
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>UserName</th>
                        <th>Score</th>
                    </tr>
                    {props.scoreArray.map((item, index) => {
                        return <tr className={index % 2 == 0 ? "type-b" : "type-a"}>
                            <td>{index + 1}</td>
                            <td>{item.user.userName}</td>
                            <td>{item.score}</td>

                        </tr>
                    })}


                </tbody>
            </table>

        </div>
    );
};

export default leaderBoard;