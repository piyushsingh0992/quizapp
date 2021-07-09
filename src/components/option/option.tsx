import React from 'react';
import "./option.css";
type optionPropType = {
    text: string; isRight: boolean;
}

const Option = ({ text, isRight }: optionPropType) => {
    return (

        <div className="option ">
            <p>{text}</p>
        </div>
        // <div className="selectedOption">
        //     <p>{text}</p>
        // </div>

    );
};

export default Option;