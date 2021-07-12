import  { Dispatch } from 'react';




export type userDetailsType = {
    userName: string,
    userKey: string
}

export type authInitialState = {
    loginStatus: boolean,
    userDetails?: userDetailsType
}


export type authContextType = {
    auth: authInitialState;
    authDispatch: Dispatch<authActionType>
}

export type authActionType = {
    type: "LOGOUT"
} | {
    type: "LOGIN", payload: userDetailsType
}
