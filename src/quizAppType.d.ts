
type authActionType = {
    type: "LOGOUT"
} | { type: "LOGOUT", payload: authStateType }

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