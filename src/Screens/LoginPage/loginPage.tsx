import React from 'react';
import "./loginPage.css";
import Navbar from "../../components/navbar/navbar";
import SignIn from '../../components/signIn/signIn';
import Signup from '../../components/signUp/signUp';


const LoginPage = () => {
    return (
        <div className="loginPage">
            <Navbar />
            <div className="loginPage-popup">
               
                <SignIn/>
                {/* <Signup/> */}
            </div>
        </div>
    );
};

export default LoginPage;