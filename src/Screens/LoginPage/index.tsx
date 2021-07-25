import React, { useState, useEffect } from 'react';
import "./loginPage.css";
import Navbar from "../../components/navbar";
import SignIn from '../../components/signIn';
import Signup from '../../components/signUp';
import { useAuth } from "../../contexts/authContext/authContext";

import { Location } from "history";
import { useLocation, useNavigate } from "react-router-dom";
import { signInObjectType, signUpObjectType } from "../../types/types";




const LoginPage = () => {


    let [signInObject, signInObjectSetter] = useState<signInObjectType>({
        userId: "",
        password: "",
    })

    let [signUpObject, signUpObjectSetter] = useState<signUpObjectType>({
        userName: "",
        userId: "",
        password: "",
    })


    const [alreadyUser, alreadyUserSetter] = useState<boolean>(true)
    let { auth: { loginStatus }, authDispatch } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as { from: string };
    useEffect(() => {
        if (loginStatus) {
            navigate(state?.from ? state.from : "/");
        }
    }, [loginStatus]);





    return (
        <div className="loginPage">
            <Navbar />
            <div className="loginPage-popup">
                {alreadyUser ? <SignIn alreadyUserSetter={alreadyUserSetter} signInObject={signInObject} signInObjectSetter={signInObjectSetter} authDispatch={authDispatch} /> :
                    <Signup alreadyUserSetter={alreadyUserSetter} signUpObject={signUpObject} signUpObjectSetter={signUpObjectSetter} signInObjectSetter={signInObjectSetter} />}


            </div>
        </div>
    );
};

export default LoginPage;