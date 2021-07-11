import React, { Dispatch } from 'react';
import "./signIn.css";
import Input from "../input/input";
import Button from "../buttton/button";
import logo from "../../utils/images/logo.png";

type SignInProps = {
    alreadyUserSetter: Dispatch<boolean>
}
const SignIn = ({alreadyUserSetter}:SignInProps) => {
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
                                            onClick={() => { alreadyUserSetter(false) }}
                    >
                        &nbsp; Sign Up
                    </span>
                </p>
            </div>
        </div>

    );
};

export default SignIn;