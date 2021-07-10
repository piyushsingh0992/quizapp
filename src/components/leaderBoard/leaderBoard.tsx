import React from 'react';

import "./leaderBoard.css";

const leaderBoard = () => {

    return (
        <div className="leaderBoard">
            <h1 >Quiz Name</h1>
            <table className="leaderBoard-table">
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>UserName</th>
                        <th>Score</th>
                    </tr>
                    <tr className="type-b">
                        <td>2</td>
                        <td>Eve</td>
                        <td>94</td>
                    </tr>
                    <tr className="type-a">
                        <td>1</td>
                        <td>Jill</td>
                        <td>50</td>
                    </tr>
                    <tr className="type-b">
                        <td>2</td>
                        <td>Eve</td>
                        <td>94</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default leaderBoard;