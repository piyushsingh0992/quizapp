import React, { Dispatch, useState } from 'react';
import "./style.css";
import Input from "../input";
import logo from "../../utils/images/logo.png";
import Button from "../buttton";
import { useToast } from "../../contexts/toastContext/toastContext";
import { signUpfunction } from "../../utils/authFunction/authFunction";

import { signUpProps } from "../../types/types";





const SignUp = (props: signUpProps) => {



    const { toastDispatch } = useToast();

    function userNameHandler(value: string) {
        props.signUpObjectSetter({ ...props.signUpObject, userName: value });
    }

    function userIdHandler(value: string) {
        props.signUpObjectSetter({ ...props.signUpObject, userId: value });
    }

    function passwordHandler(value: string) {
        props.signUpObjectSetter({ ...props.signUpObject, password: value });
    }


    return (
        <div className="signUp" >
            <img src={logo} />
            <Input
                label="User Name"
                value={props.signUpObject.userName} onChangeFunction={userNameHandler}
            />
            <Input
                label="User Id"
                value={props.signUpObject.userId} onChangeFunction={userIdHandler}

            />
            <Input
                label="Password"
                value={props.signUpObject.password} onChangeFunction={passwordHandler}
                type="Password"
            />
            <div className="signUp-btn-container">
                <Button text="Sign Up" clickFunction={() => { signUpfunction(props.signUpObject, toastDispatch, props.alreadyUserSetter, props.signInObjectSetter, props.signUpObjectSetter) }} />
                <p >
                    Already a Member  ?
                    <span
                        onClick={() => {
                            props.alreadyUserSetter(true);
                            props.signUpObjectSetter({
                                userId: "",
                                userName: "",
                                password: "",
                            })
                        }}
                    >
                        &nbsp; Sign in
                    </span>
                </p>
            </div>
        </div>

    );
};

export default SignUp;