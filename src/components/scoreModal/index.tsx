import React from 'react';
import "./style.css";
import Button from '../buttton';
import { useNavigate } from "react-router-dom";
import {scoreModalProps} from "../../types/types"


const ScoreModal = (props: scoreModalProps) => {
    const navigate = useNavigate();
    return (
        <div className="scoreModal-container">
            <div className="scoreModal">
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