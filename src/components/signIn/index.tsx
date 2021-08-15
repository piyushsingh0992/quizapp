import React, { Dispatch, useState, ChangeEvent } from 'react';
import "./style.css";
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
    const [loader, loaderSetter] = useState(false);





    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        props.signInObjectSetter({
            ...props.signInObject,
            [name]: event.target.value,
        });
    };

    return (
        <div className="signIn" >
            <img src={logo} />
            <Input
                name="userId"
                label="User Id"
                value={props.signInObject.userId}
                onChangeFunction={handleChange}
            />
            <Input
                name="password"
                label="Password"
                value={props.signInObject.password}
                onChangeFunction={handleChange}
                type="Password"
            />
            <div className="signin-btn-container">
                <Button loader={loader} text="Sign In" clickFunction={() => signInFunction(props.signInObject, toastDispatch, authDispatch)} />
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