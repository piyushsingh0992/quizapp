import React, { Dispatch, useState, ChangeEvent } from 'react';
import "./style.css";
import Input from "../input";
import logo from "../../utils/images/logo.png";
import Button from "../buttton";
import { useToast } from "../../contexts/toastContext/toastContext";
import { signUpfunction } from "../../utils/authFunction/authFunction";

import { signUpProps } from "../../types/types";





const SignUp = (props: signUpProps) => {


    const [loader, loaderSetter] = useState(false);
    const { toastDispatch } = useToast();


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
                <Button loader={loader} text="Sign Up" clickFunction={() => { signUpfunction(props.signUpObject, toastDispatch, props.alreadyUserSetter, props.signInObjectSetter, props.signUpObjectSetter) }} />
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