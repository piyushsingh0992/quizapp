import React, { createContext, ReactNode, useReducer, useContext } from 'react';
import { authInitialState, authContextType, authActionType } from "../../types/types";

const AuthContext = createContext({} as authContextType);

let initialauthState: authInitialState = {
    loginStatus: false,
}


const authHandler = (state: authInitialState, action: authActionType) => {
    switch (action.type) {
        case "LOGIN":
            return {
                loginStatus: true,
                userDetails: action.payload
            }
        case "LOGOUT":
            return {
                loginStatus: false,
            }
    }
}

export const AuthProvider = (props: { children: ReactNode }) => {
    const [auth, authDispatch] = useReducer(authHandler, initialauthState);
    return <AuthContext.Provider value={{ auth, authDispatch }}>
        {props.children}
    </AuthContext.Provider>
}


export const useAuth = () => {
    return useContext(AuthContext);
}