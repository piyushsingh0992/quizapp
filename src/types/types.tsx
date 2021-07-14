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
    token: string,
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
    index: number;
    text: string; isRight: boolean; selected: boolean; selectSetter: Dispatch<React.SetStateAction<selectType>>
    , questionIndex: number,
    scoreArraySetter: Dispatch<React.SetStateAction<scoreArray>>;
    currentQuestionController: (type: "NEXT" | "PREV") => void;
}

export type quizQuestionType = {
    img: string,
    question: string,
    options: optionPropType[],
    questionIndex: number,
    scoreArraySetter: Dispatch<React.SetStateAction<scoreArray>>

    currentQuestionController: (type: "NEXT" | "PREV") => void;
}


export type selectType = boolean[]

export type quizQuestionsArray = quizQuestionType[];

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

export type quizCardArray = quizDetails[];



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



export type scoreArray = number[]
export type modalType = {
    showRulesModal: boolean;
    showSubmitModal: boolean;
    showScoreModal: boolean;
}
export type modalPayloadType = {
    type: "SHOW_RULES" | "SHOW_SUBMIT" | "SHOW_SCORE" | "HIDE_RULES" | "HIDE_SUBMIT" | "HIDE_SCORE";
}

export type submitModalProps = {

    time: number;
    modalDispatch: Dispatch<modalPayloadType>;
    timeSetter: Dispatch<React.SetStateAction<number>>;
    submitModalTextSetter: Dispatch<React.SetStateAction<string>>;
    score: number; quizId: string; loaderSetter: Dispatch<React.SetStateAction<boolean>>;
}
export type rulesModalProps = {
    modalDispatch: Dispatch<modalPayloadType>
}

export type activeQuizDetails = {
    currentQuestion: number;
    totalQuestion: number;
    time: number;
    modalDispatch: Dispatch<modalPayloadType>;
    currentQuestionController: (type: "NEXT" | "PREV") => void;
}

export type scoreModalProps = {
    submitModalText: string;
    quizId: string;
}



export type errorContextType = {
    errorState: boolean,
    errorDispatch: (status: "ERROR" | "RESOLVE") => void
}
