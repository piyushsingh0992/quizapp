import React, { Dispatch } from 'react';
import "./submitModal.css";
import Button from '../buttton/button';
import close from "../../utils/images/close.png";

import submitted from "../../utils/images/submitted.png";
import { updadteLeaderBoard } from "../../utils/leaderBoardFunction/leaderBoardFunction";

type submitModalProps = {
    timeSetter: Dispatch<React.SetStateAction<number>>
    submitModalTextSetter: Dispatch<React.SetStateAction<string>>,
    time: number, timeString: string, showSubmitSetter: Dispatch<React.SetStateAction<boolean>>
    score: number, userKey: string, quizId: string, loaderSetter: Dispatch<React.SetStateAction<boolean>>, showScoreSetter: Dispatch<React.SetStateAction<boolean>>
}

const SubmitModal = (props: submitModalProps) => {
    return (
        <div className="submitModal-container">

            <div className="submitModal">
                <img src={close} className="submitModal-close" onClick={() => {
                    props.showSubmitSetter(false)
                    updadteLeaderBoard(props.score, props.userKey, props.quizId, props.loaderSetter, props.showScoreSetter, props.submitModalTextSetter)
                }} />
                {props.time > 0 ? <>
                    <p>Are your sure you Want to submit the Quiz you still have {props.timeString} minutes Left?</p>
                    <Button text="Submit" clickFunction={() => {
                        props.timeSetter(1000);
                        props.showSubmitSetter(false);
                        updadteLeaderBoard(props.score, props.userKey, props.quizId, props.loaderSetter, props.showScoreSetter, props.submitModalTextSetter)
                    }} />
                </> : <>
                    <img src={submitted} className="submitModal-Submitted" />
                    <p>Succesfully Submited</p>
                </>

                }




            </div>
        </div>
    );
};

export default SubmitModal;