import React, { Dispatch } from 'react';
import "./scoreModal.css";
import Button from '../buttton/button';
import close from "../../utils/images/close.png";

import submitted from "../../utils/images/submitted.png";

type scoreModalProps = {

}

const ScoreModal = (props: scoreModalProps) => {
    return (
        <div className="scoreModal-container">

            <div className="scoreModal">
                <img src={close} className="scoreModal-close" />

                <h1>Hey Piyush Your score is 1</h1>
                <div className="scoreModal-btn-container">
                    <Button type="secondary" text="Try Again" />
                    <Button text="Try Another Quiz" />
                </div>

            </div>
        </div>
    );
};

export default ScoreModal;