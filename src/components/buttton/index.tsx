import React from "react";
import "./style.css";
import {buttonType} from "../../types/types";


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
