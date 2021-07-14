import React, { createContext, ReactNode, useReducer, useContext, useEffect, Dispatch } from 'react';
import { authInitialState, authContextType, authActionType } from "../../types/types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext({} as authContextType);

let initialauthState: authInitialState = {
    loginStatus: false,
}

function setupAuthHeaderForServiceCalls(token: string | null) {
    if (token) {
        return (axios.defaults.headers.common["auth"] = token);
    }
    delete axios.defaults.headers.common["auth"];
}



const authHandler = (state: authInitialState, action: authActionType) => {
    switch (action.type) {
        case "LOGIN":
            setupAuthHeaderForServiceCalls(action.payload.token);
            return {
                loginStatus: true,
                userDetails: action.payload
            }
        case "LOGOUT":
            setupAuthHeaderForServiceCalls(null);
            window.localStorage.removeItem("loginStatus");
            return {
                loginStatus: false,
            }
    }
}

export const AuthProvider = (props: { children: ReactNode }) => {
    const [auth, authDispatch] = useReducer(authHandler, initialauthState);
    const navigate = useNavigate();

    function setupAuthExceptionHandler(authDispatch: Dispatch<authActionType>, navigate: any) {
        const UNAUTHORIZED = 401;
        ;
        axios.interceptors.response.use(


            (response) => response,
            (error) => {
                ;
                if (error?.response?.status === UNAUTHORIZED) {
                    console.log("here")
                    authDispatch({ type: "LOGOUT" });
                    navigate("login");
                }
                return Promise.reject(error);
            }
        );
    }


    useEffect(() => {
        let login = window.localStorage.getItem("loginStatus");
        
        setupAuthExceptionHandler(authDispatch, navigate);
        if (login) {
            let { userName,  token }: { userName: string,  token: string } = JSON.parse(login);
            authDispatch({
                type: "LOGIN", payload: {
                    userName,  token
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