import { Dispatch } from 'react';

import axios from 'axios';
import { apiCall } from "../../apiCall/apiCall";

type signUpObjectType = {
    userName: string,
    userId: string,
    password: string,
}

export type signInObjectType = {
    userId: string,
    password: string,
}

export async function signUpfunction({
    userName,
    userId,
    password,
}: signUpObjectType, toastDispatch: (type: string, message?: string) => void, alreadyUserSetter: Dispatch<boolean>, signInObjectSetter: Dispatch<signInObjectType>, signUpObjectSetter: Dispatch<signUpObjectType>) {
    try {
        let response = await apiCall("POST", `auth/create`, {
            userName,
            userId,
            password,
        });

        if (response.success === true) {
            
            toastDispatch("success", "Account Created");
            alreadyUserSetter(true)
            signInObjectSetter(response.data.userDetails);
            signUpObjectSetter({
                userName: "",
                userId: "",
                password: "",
            });
        } else {
            toastDispatch("error", response.message);
        }
    } catch (error) {

        toastDispatch("error", "error occured");
    }
}