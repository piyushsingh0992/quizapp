import { useState, ChangeEvent, useEffect } from 'react';
import "./style.css";
import Input from "../input";
import Button from "../buttton";
import logo from "../../assets/images/logo.png";
import { useAuth } from "../../contexts/authContext/authContext";
import { useToast } from "../../contexts/toastContext/toastContext";
import { SignInProps } from "../../types/types";
import { apiCall } from "../../apiCall/apiCall";

const SignIn = (props: SignInProps) => {
    let { authDispatch } = useAuth();
    const { toastDispatch } = useToast();
    const [loader, loaderSetter] = useState(false);
    async function signInFunction() {
        let response = await apiCall("POST", "auth", props.signInObject);
        if (response.success === true) {
            authDispatch({
                type: "LOGIN", payload: {
                    userName: response.data.userName,
                    token: response.data.token,
                }
            })
        } else {
            toastDispatch("error", response.message);
        }

    }

    useEffect(() => {


        if (loader) {
            signInFunction()
        }

    }, [loader])






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
                <Button loader={loader} text="Sign In" clickFunction={() => {
                    loaderSetter(true);
                    // signInFunction(props.signInObject, toastDispatch, authDispatch)
                }} />
                <br/>
                <Button loader={loader} text="login as Guest" clickFunction={() => {
                    props.signInObjectSetter({
                        userId:"piyush1993@gmail.com"
                        ,password:"hello@1997"
                    });
                    loaderSetter(true);
                    // signInFunction(props.signInObject, toastDispatch, authDispatch)
                }} />
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