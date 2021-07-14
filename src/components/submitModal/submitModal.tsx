import React from 'react';
import "./submitModal.css";
import Button from '../buttton/button';
import close from "../../utils/images/close.png";
import moment from "moment";


import { updadteLeaderBoard } from "../../utils/leaderBoardFunction/leaderBoardFunction";
import {submitModalProps} from "../../types/types"





const SubmitModal = (props: submitModalProps) => {
    let timeString = moment.utc(props.time).format('mm:ss');
    return (
        <div className="submitModal-container">

            <div className="submitModal">
                <img src={close} className="submitModal-close" onClick={() => {
                    props.modalDispatch({ type: "HIDE_SUBMIT" })
                }} />
                <p>Are your sure you Want to submit the Quiz you still have {timeString} minutes Left?</p>
                <Button text="Submit" clickFunction={() => {
                    updadteLeaderBoard(props.score, props.quizId, props.loaderSetter, props.submitModalTextSetter, props.modalDispatch)
                }} />
            </div>
        </div>
    );
};

export default SubmitModal;