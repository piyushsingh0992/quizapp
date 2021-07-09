import React from "react";
import "./button.css";


type buttonType = {
    text: string, type?: string, size?: string
}

function Button({ text, type, size }: buttonType) {

    return (
        <button

            className={`btn btn-${type ? type : "primary"} ${size ? size : "default"
                }`}
        >
            {text}
        </button>
    );
}

export default Button;
