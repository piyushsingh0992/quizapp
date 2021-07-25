import React from 'react';
import "./style.css";
import Button from '../buttton';
import close from "../../utils/images/close.png";
import {rulesModalProps} from "../../types/types"






const RulesModal = (props: rulesModalProps) => {
    return (
        <div className="rulesModal-container">
            <div className="rulesModal">
                <img src={close} className="rulesModal-close" onClick={() => { props.modalDispatch({ type: "HIDE_RULES" }) }} />
                <p>Quiz Rules</p>
                <ol>
                    <li>You get 4 points for every Right Answer</li>
                    <li>There is no negative Marking</li>
                    <li>You will get 2:00 Minutes to complete the whole Quiz</li>
                </ol>

                <Button text="Start Quiz" clickFunction={() => { props.modalDispatch({ type: "HIDE_RULES" }) }} />
            </div>
        </div>
    );
};

export default RulesModal;