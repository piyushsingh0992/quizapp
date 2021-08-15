import React, { createContext, ReactNode, useReducer, useContext, useEffect, Dispatch } from 'react';
import { authInitialState, authContextType } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { setupAuthExceptionHandler } from "../../utils/common";
import { authHandler } from "./reducer";
const AuthContext = createContext({} as authContextType);

let initialauthState: authInitialState = {
    loginStatus: false,
}
export const AuthProvider = (props: { children: ReactNode }) => {
    const [auth, authDispatch] = useReducer(authHandler, initialauthState);
    const navigate = useNavigate();
    useEffect(() => {
        let login = window.localStorage.getItem("quizAppUserInfo");
        setupAuthExceptionHandler(authDispatch, navigate);
        if (login) {
            let { userName, token }: { userName: string, token: string } = JSON.parse(login);
            authDispatch({
                type: "LOGIN", payload: {
                    userName, token
                }
            })
        }

    }, []);

    return <AuthContext.Provider value={{ auth, authDispatch }}>
        {props.children}
    </AuthContext.Provider>
}


export const useAuth = () => {
    return useContext(AuthContext);
}