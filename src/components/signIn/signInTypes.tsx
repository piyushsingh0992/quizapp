import { Dispatch } from 'react';

export type SignInProps = {
    alreadyUserSetter: Dispatch<boolean>;

    signInObject: signInObjectType;
    signInObjectSetter: Dispatch<signInObjectType>
};



export type signInObjectType = {
    userId: string,
    password: string,
}