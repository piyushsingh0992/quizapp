import React, { Dispatch, useState, ChangeEvent, useEffect } from 'react';
import "./style.css";
import Input from "../input";
import logo from "../../utils/images/logo.png";
import Button from "../buttton";
import { useToast } from "../../contexts/toastContext/toastContext";
import { signUpProps } from "../../types/types";
import { apiCall } from "../../apiCall/apiCall";

const SignUp = (props: signUpProps) => {
    const [loader, loaderSetter] = useState(false);
    const { toastDispatch } = useToast();

    useEffect(() => {
        async function signUpfunction() {
            let response = await apiCall("POST", `auth/create`, props.signUpObject);
            if (response.success === true) {
                toastDispatch("success", "Account Created");
                props.alreadyUserSetter(true)
                props.signInObjectSetter(props.signUpObject);
                props.signUpObjectSetter({
                    userName: "",
                    userId: "",
                    password: "",
                });
                loaderSetter(false);
            } else {
                toastDispatch("error", response.message);
                loaderSetter(false);
            }
        }
        if (loader) {
            signUpfunction()
        }
    }, [loader])


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        props.signUpObjectSetter({
            ...props.signUpObject,
            [name]: event.target.value,
        });
    };



    return (
        <div className="signUp" >
            <img src={logo} />
            <Input name="userName" label="User Name"
                value={props.signUpObject.userName} onChangeFunction={handleChange}
            />
            <Input name="userId"

                label="User Id"
                value={props.signUpObject.userId} onChangeFunction={handleChange}

            />
            <Input name="password"
                label="Password"
                value={props.signUpObject.password} onChangeFunction={handleChange}
                type="Password"
            />
            <div className="signUp-btn-container">
                <Button loader={loader} text="Sign Up" clickFunction={() => {
                    loaderSetter(true);
                }} />
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