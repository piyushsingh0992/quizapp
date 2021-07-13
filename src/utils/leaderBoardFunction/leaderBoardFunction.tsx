import { Dispatch } from 'react';
import { apiCall } from "../../apiCall/apiCall";
import { signUpObjectType, signInObjectType, authActionType } from "../../types/types";

export async function updadteLeaderBoard(score: number, userKey: string, quizId: string, loaderSetter: Dispatch<React.SetStateAction<boolean>>, showScoreSetter: Dispatch<React.SetStateAction<boolean>>, submitModalTextSetter: Dispatch<React.SetStateAction<string>>
) {
    loaderSetter(true);

    try {
        let response = await apiCall("POST", `leaderBoard/${quizId}`, {
            score, userKey
        });

        if (response.success === true) {
            let finalScore = response.data.score;
            let leaderBoard = response.data.leaderBoard;
            submitModalTextSetter(`Your score is ${finalScore} ${leaderBoard ? "!! Congratulation You made it to leaderBoard" : ""}`)
            loaderSetter(false);
            showScoreSetter(true);
        } else {
            submitModalTextSetter(response.message)
            loaderSetter(false);
            showScoreSetter(true);
        }

    } catch (error) {
        submitModalTextSetter(`Some error Occuured couln't save your data please try again`)
        loaderSetter(false);
        showScoreSetter(true);
    }
}