import React, { Dispatch, useEffect } from 'react';
import "./signUp.css";
import Input from "../input/input";
import logo from "../../utils/images/logo.png";
import Button from "../buttton/button";



const SignUp = ({ alreadyUserSetter }: SignUpProps) => {
    return (
        <div className="signUp" >
            <img src={logo} />
            <Input
                label="User Name"
                value=""
            />
            <Input
                label="User Id"
                value=""
            />
            <Input
                label="Password"
                value=""
            />
            <div className="signUp-btn-container">
                <Button text="Sign Up" />
                <p >
                    Already a Member  ?
                    <span
                        onClick={() => { alreadyUserSetter(true) }}
                    >
                        &nbsp; Sign in
                    </span>
                </p>
            </div>
        </div>

    );
};

export default SignUp;