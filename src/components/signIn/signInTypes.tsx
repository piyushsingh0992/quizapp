import { Dispatch } from 'react';

export type SignInProps = {
    alreadyUserSetter: Dispatch<boolean>;
    signInObject: signInObjectType;
    signInObjectSetter: Dispatch<signInObjectType>
    authDispatch: Dispatch<authActionType>
};
export type userDetailsType = {
    userName: string,
    token:string,
}

export type authActionType = {
    type: "LOGOUT"
} | {
    type: "LOGIN", payload: userDetailsType
}

export type signInObjectType = {
    userId: string,
    password: string,
}