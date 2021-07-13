import React, { Dispatch } from 'react';
import "./scoreModal.css";
import Button from '../buttton/button';
import close from "../../utils/images/close.png";

import submitted from "../../utils/images/submitted.png";
import { useNavigate } from "react-router-dom";

type scoreModalProps = {
    submitModalText: string;
    quizId: string;
}

const ScoreModal = (props: scoreModalProps) => {
    const navigate = useNavigate();



    return (
        <div className="scoreModal-container">

            <div className="scoreModal">
                <img src={close} className="scoreModal-close" />

                <h1>{props.submitModalText}</h1>
                <div className="scoreModal-btn-container">
                    <Button type="secondary" text="Try Again" clickFunction={() => { window.location.reload(); }} />
                    <Button text="Try Another Quiz" clickFunction={() => { navigate(`/`); }} />
                </div>

            </div>
        </div>
    );
};

export default ScoreModal;