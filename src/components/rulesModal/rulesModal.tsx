import React from 'react';
import "./rulesModal.css";
import Button from '../buttton/button';
import close from "../../utils/images/close.png";

type rulesModalProps = {
    showRulesModalSetter: React.Dispatch<React.SetStateAction<boolean>>
}

const RulesModal = (props: rulesModalProps) => {
    return (
        <div className="rulesModal-container">
            <div className="rulesModal">
                <img src={close} className="rulesModal-close" onClick={() => { props.showRulesModalSetter(false) }} />
                <p>Quiz Rules</p>
                <ol>
                    <li>You get 4 points for every Right Answer</li>
                    <li>There is no negative Marking</li>
                    <li>You will get 2:00 Minutes to complete the whole Quiz</li>
                </ol>

                <Button text="Start Quiz" clickFunction={() => { props.showRulesModalSetter(false) }} />
            </div>
        </div>
    );
};

export default RulesModal;