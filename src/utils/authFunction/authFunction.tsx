import { Dispatch } from 'react';
import { apiCall } from "../../apiCall/apiCall";
import { signUpObjectType, signInObjectType, authActionType } from "../../types/types";


export async function signInFunction({ userId, password }: signInObjectType, toastDispatch: (type: string, message?: string) => void, authDispatch: Dispatch<authActionType>) {
    try {
        let response = await apiCall("POST", "auth", {
            userId,
            password,
        });
        ;
        if (response.success === true) {
            localStorage.setItem(
                "loginStatus",
                JSON.stringify({
                    userName: response.data.userName,
                    userKey: response.data.userKey,
                    token: response.data.token
                })
            )

            authDispatch({
                type: "LOGIN", payload: {
                    userName: response.data.userName,
                    userKey: response.data.userKey,
                    token: response.data.token,
                }
            })
        } else {
            toastDispatch("error", response.message);
        }
    } catch (error) {
        toastDispatch("error", "some error Occured Cann't log you in");
    }
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