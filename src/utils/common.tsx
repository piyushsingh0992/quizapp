
import { Dispatch } from 'react';
import { authActionType } from "../types/types";
import axios from "axios";



export function setupAuthExceptionHandler(authDispatch: Dispatch<authActionType>, navigate: any) {
    const UNAUTHORIZED = 401;
    ;
    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            ;
            if (error?.response?.status === UNAUTHORIZED) {
                authDispatch({ type: "LOGOUT" });
                navigate("/login");
            }
            return Promise.reject(error);
        }
    );
}

export function setupAuthHeaderForServiceCalls(token: string | null) {
    if (token) {
        return (axios.defaults.headers.common["auth"] = token);
    }
    delete axios.defaults.headers.common["auth"];
}