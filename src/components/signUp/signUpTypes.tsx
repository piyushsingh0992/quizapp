import { Dispatch } from 'react';
export type signUpProps = {
    alreadyUserSetter: Dispatch<boolean>;
    signUpObject: signUpObjectType;
    signUpObjectSetter: Dispatch<signUpObjectType>
    signInObjectSetter: Dispatch<signInObjectType>
};

export type signUpObjectType = {
    userName: string,
    userId: string,
    password: string,
}

export type signInObjectType = {
    userId: string,
    password: string,
}