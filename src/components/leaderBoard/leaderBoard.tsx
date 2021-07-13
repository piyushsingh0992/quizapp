import React from 'react';

import "./leaderBoard.css";

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
}

const leaderBoard = (props: leaderBoardPropType) => {

    return (
        <div className="leaderBoard">
            <h1 >{props.quizName}</h1>
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