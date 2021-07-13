import { Dispatch } from 'react';
import { apiCall } from "../../apiCall/apiCall";
import { modalPayloadType } from "../../types/types";





export async function updadteLeaderBoard(score: number, userKey: string, quizId: string, loaderSetter: Dispatch<React.SetStateAction<boolean>>, submitModalTextSetter: Dispatch<React.SetStateAction<string>>, modalDispatch: Dispatch<modalPayloadType>
) {
    loaderSetter(true);
    try {
        let response = await apiCall("POST", `leaderBoard/${quizId}`, {
            score, userKey
        });

        if (response.success === true) {
            debugger;
            let leaderBoard = response.data.LeaderBoard;
            submitModalTextSetter(`Your score is ${score} ${leaderBoard ? "!! Congratulation You made it to leaderBoard" : ""}`)
            loaderSetter(false);
            modalDispatch({ type: "SHOW_SCORE" });
        } else {
            submitModalTextSetter(response.message)
            loaderSetter(false);
            modalDispatch({ type: "SHOW_SCORE" });
        }

    } catch (error) {
        submitModalTextSetter(`Some error Occuured couln't save your data please try again`)
        loaderSetter(false);
        modalDispatch({ type: "SHOW_SCORE" });
    }
}