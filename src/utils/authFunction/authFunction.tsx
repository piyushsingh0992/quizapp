import axios from 'axios';
import { apiCall } from "../../apiCall/apiCall.js";

type signUpObjectType = {
    userName: string,
    userId: string,
    password: string,
}

async function signUpfunction({
    userName,
    userId,
    password,
}: signUpObjectType,) {
    try {
        let { success } = await apiCall("POST", `auth/create`, {
            userName,
            userId,
            password,
        });

        if (success === true) {

        } else {

        }
    } catch (error) {

    }
}