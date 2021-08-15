import React from 'react';
import "./style.css";
import Button from '../buttton';
import close from "../../assets/images/close.png";
import moment from "moment";
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
                    props.timeSetter(0);
                }} />
            </div>
        </div>
    );
};

export default SubmitModal;