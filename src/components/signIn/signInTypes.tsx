import { Dispatch } from 'react';

export type SignInProps = {
    alreadyUserSetter: Dispatch<boolean>;
};



export type signInObjectType = {
    userId: string,
    password: string,
}