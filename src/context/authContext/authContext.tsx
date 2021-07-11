import { createContext, useReducer, ReactNode, Dispatch, useContext } from "react";
import { authHandler } from "./reducer";


let initialauthState = {
    loginStatus: true
}

const AuthContext = createContext<authContextType>({
    auth: initialauthState,
    authDispatch: () => { }
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [auth, authDispatch] = useReducer(authHandler, initialauthState);
    return <AuthContext.Provider value={{ auth, authDispatch }}>
        {children}
    </AuthContext.Provider>
}



export const useAuth = () => {

    return useContext(AuthContext)
}