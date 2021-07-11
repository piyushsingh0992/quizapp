import { createContext, useReducer, ReactNode, Dispatch, useContext } from "react";

type userDetailsType = {
    userName: string,
    userKey: string
}

type authStateType = {
    loginStatus: boolean, userDetails?: userDetailsType
}



type authContextType = {
    auth: authStateType
    authDispatch: Dispatch<authActionType>
}

let initialauthState = {
    loginStatus: false
}

const AuthContext = createContext<authContextType>({
    auth: initialauthState,
    authDispatch: () => { }
})

type authActionType = {
    type: "LOGOUT"
} | { type: "LOGOUT", payload: authStateType }

const authReducer = (state: authStateType, action: authActionType) => {
    return state;
}


export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [auth, authDispatch] = useReducer(authReducer, initialauthState)
    return <AuthContext.Provider value={{ auth, authDispatch }}>
        {children}
    </AuthContext.Provider>
}



export const useAuth = () => {

    return useContext(AuthContext)
}