import React from 'react';
import "./submitModal.css";
import Button from '../buttton/button';
import close from "../../utils/images/close.png";

import submitted from "../../utils/images/submitted.png";

const SubmitModal = () => {
    return (
        <div className="submitModal-container">

            <div className="submitModal">
                <img src={close} className="submitModal-close" />
                <>
                <p>Are your sure you Want to submit the Quiz you still have 3:00 minutes Left?</p>
                <Button text="Submit" />
                </>
                {/* <>
                    <img src={submitted} className="submitModal-Submitted" />
                    <p>Succesfully Submited</p>
                </> */}


            </div>
        </div>
    );
};

export default SubmitModal;