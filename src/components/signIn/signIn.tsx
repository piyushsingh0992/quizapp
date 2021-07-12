import React, { Dispatch, useState } from 'react';
import "./signIn.css";
import Input from "../input/input";
import Button from "../buttton/button";
import logo from "../../utils/images/logo.png";
import { SignInProps, signInObjectType } from "./signInTypes";
import { useAuth } from "../../contexts/authContext/authContext";


const SignIn = (props: SignInProps) => {
    let { authDispatch } = useAuth();



    function userIdHandler(value: string) {
        props.signInObjectSetter({ ...props.signInObject, userId: value });
    }

    function passwordHandler(value: string) {
        props.signInObjectSetter({ ...props.signInObject, password: value });
    }

    return (
        <div className="signIn" >
            <img src={logo} />
            <Input
                label="User Id"
                value={props.signInObject.userId}
                onChangeFunction={userIdHandler}
            />
            <Input
                label="Password"
                value={props.signInObject.password}
                onChangeFunction={passwordHandler}
            />
            <div className="signin-btn-container">
                <Button text="Sign In" clickFunction={() => authDispatch({
                    type: "LOGIN", payload: {
                        userName: "string",
                        userKey: "string",
                    }
                })} />
                <p >
                    Not a Member yet ?
                    <span
                        onClick={() => { props.alreadyUserSetter(false) }}
                    >
                        &nbsp; Sign Up
                    </span>
                </p>
            </div>
        </div>

    );
};

export default SignIn;