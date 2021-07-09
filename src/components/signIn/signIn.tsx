import React from 'react';
import "./signIn.css";
import Input from "../input/input";
import Button from "../buttton/button";
import logo from "../../utils/images/logo.png";
const SignIn = () => {
    return (
        <div className="signIn" >
            <img src={logo} />
            <Input
                label="User Id"
                value=""

            />
            <Input
                label="Password"
                value=""

            />
            <div className="signin-btn-container">
                <Button text="Sign In" />
                <p >
                    Not a Member yet ?
                    <span
                    >
                        &nbsp; Sign Up
                    </span>
                </p>
            </div>
        </div>

    );
};

export default SignIn;