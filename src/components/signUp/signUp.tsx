import React, { Dispatch, useState } from 'react';
import "./signUp.css";
import Input from "../input/input";
import logo from "../../utils/images/logo.png";
import Button from "../buttton/button";
type SignUpProps = {
    alreadyUserSetter: Dispatch<boolean>;
};

type signUpObjectType = {
    userName: string,
    userId: string,
    password: string,
}



const SignUp = (props: SignUpProps) => {

    let [signUpObject, signUpObjectSetter] = useState<signUpObjectType>({
        userName: "",
        userId: "",
        password: "",
    })

    function userNameHandler(value: string) {
        signUpObjectSetter({ ...signUpObject, userName: value });
    }

    function userIdHandler(value: string) {
        signUpObjectSetter({ ...signUpObject, userId: value });
    }

    function passwordHandler(value: string) {
        signUpObjectSetter({ ...signUpObject, password: value });
    }


    return (
        <div className="signUp" >
            <img src={logo} />
            <Input
                label="User Name"
                value={signUpObject.userName} onChangeFunction={userNameHandler}
            />
            <Input
                label="User Id"
                value={signUpObject.userId} onChangeFunction={userIdHandler}

            />
            <Input
                label="Password"
                value={signUpObject.password} onChangeFunction={passwordHandler}
            />
            <div className="signUp-btn-container">
                <Button text="Sign Up" />
                <p >
                    Already a Member  ?
                    <span
                        onClick={() => { props.alreadyUserSetter(true) }}
                    >
                        &nbsp; Sign in
                    </span>
                </p>
            </div>
        </div>

    );
};

export default SignUp;