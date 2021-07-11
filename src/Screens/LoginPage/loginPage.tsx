import React, { useState } from 'react';
import "./loginPage.css";
import Navbar from "../../components/navbar/navbar";
import SignIn from '../../components/signIn/signIn';
import Signup from '../../components/signUp/signUp';


const LoginPage = () => {

    const [alreadyUser, alreadyUserSetter] = useState<boolean>(true)
    return (
        <div className="loginPage">
            <Navbar />
            <div className="loginPage-popup">
                {alreadyUser ? <SignIn alreadyUserSetter={alreadyUserSetter}/> : <Signup alreadyUserSetter={alreadyUserSetter}/>}


            </div>
        </div>
    );
};

export default LoginPage;