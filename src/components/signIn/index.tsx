import React, { Dispatch, useState } from 'react';
import "./signIn.css";
import Input from "../input";
import Button from "../buttton";
import logo from "../../utils/images/logo.png";
import { useAuth } from "../../contexts/authContext/authContext";
import { signInFunction } from "../../utils/authFunction/authFunction";
import { useToast } from "../../contexts/toastContext/toastContext";
import { SignInProps } from "../../types/types";


const SignIn = (props: SignInProps) => {
    let { authDispatch } = useAuth();
    const { toastDispatch } = useToast();



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
                type="Password"
            />
            <div className="signin-btn-container">
                <Button text="Sign In" clickFunction={() => signInFunction(props.signInObject, toastDispatch, authDispatch)} />
                <p >
                    Not a Member yet ?
                    <span
                        onClick={() => {
                            props.alreadyUserSetter(false);
                            props.signInObjectSetter({
                                userId: "",
                                password: "",
                            })
                        }}
                    >
                        &nbsp; Sign Up
                    </span>
                </p>
            </div>
        </div>

    );
};

export default SignIn;