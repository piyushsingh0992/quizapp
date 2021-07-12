import React, { Dispatch } from 'react';
import "./submitModal.css";
import Button from '../buttton/button';
import close from "../../utils/images/close.png";

import submitted from "../../utils/images/submitted.png";

type submitModalProps = {
    time: number, timeString: string, showSubmitSetter: Dispatch<React.SetStateAction<boolean>>
}

const SubmitModal = (props: submitModalProps) => {
    return (
        <div className="submitModal-container">

            <div className="submitModal">
                <img src={close} className="submitModal-close" onClick={() => { props.showSubmitSetter((value) => !value) }} />
                {props.time > 0 ? <>
                    <p>Are your sure you Want to submit the Quiz you still have {props.timeString} minutes Left?</p>
                    <Button text="Submit" />
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