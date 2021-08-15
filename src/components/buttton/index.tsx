import React from "react";
import "./style.css";
import { buttonType } from "../../types/types";
import MiniLoader from "../miniloader";

function Button({ text, type, size, clickFunction, loader }: buttonType) {

    return (
        <button
            onClick={() => { clickFunction && clickFunction() }}
            className={`btn btn-${type ? type : "primary"} ${size ? size : "default"}`}
        >
            {loader ? <MiniLoader /> : text}
        </button>
    );
}

export default Button;
