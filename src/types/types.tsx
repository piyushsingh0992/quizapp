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

export type SignInProps = {
    alreadyUserSetter: Dispatch<boolean>;
    signInObject: signInObjectType;
    signInObjectSetter: Dispatch<signInObjectType>
    authDispatch: Dispatch<authActionType>
};
export type userDetailsType = {
    userName: string,
    userKey: string
}

export type authActionType = {
    type: "LOGOUT"
} | {
    type: "LOGIN", payload: userDetailsType
}




export type requestType = "GET" | "POST" | "DELETE";

export type successResult = {
    success: true;
    data: any
}
export type failureResult = {
    success: false;
    message: string;
}

export type buttonType = {
    text: string, type?: string, size?: string, clickFunction?: () => void
}

export type inputPropsType = {
    label: string; inputType?: string; value: any, onChangeFunction: (value: string) => void
}

export type optionPropType = {
    text: string; isRight: boolean;
}

export type privateRouteType = {
    path: string;
    element: React.ReactElement;
}

export type quizCardProps = {
    quizImg: string;
    quizName: string;
    quizId: string;
}


export type quizDetails = {
    quizImg: string,
    quizName: string,
    quizId: string,
}

export type quizCards = quizDetails[];



export type authInitialState = {
    loginStatus: boolean,
    userDetails?: userDetailsType
}


export type authContextType = {
    auth: authInitialState;
    authDispatch: Dispatch<authActionType>
}


export type toastStateType = {
    trigger: boolean,
    type: string,
    message: string
}


export type toastContextType = {
    toastState: toastStateType,
    toastDispatch: (type: string, message?: string) => void
}


