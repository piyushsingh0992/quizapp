import React from "react";
import "./button.css";


type buttonType = {
    text: string, type?: string, size?: string, clickFunction?: () => void
}

function Button({ text, type, size, clickFunction }: buttonType) {

    return (
        <button
            onClick={() => { clickFunction && clickFunction() }}
            className={`btn btn-${type ? type : "primary"} ${size ? size : "default"}`}
        >
            {text}
        </button>
    );
}

export default Button;
