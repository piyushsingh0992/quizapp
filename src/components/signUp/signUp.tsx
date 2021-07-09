import React from 'react';
import "./signUp.css";
import Input from "../input/input";
import logo from "../../utils/images/logo.png";
import Button from "../buttton/button";
const Signup = () => {
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
                <Button text="Sign In" />
                <p >
                    Already a Member  ?
                    <span
                    >
                        &nbsp; Sign in
                    </span>
                </p>
            </div>
        </div>

    );
};

export default Signup;