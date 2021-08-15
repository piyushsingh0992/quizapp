import { authInitialState, authActionType } from "../../types/types";

import { setupAuthHeaderForServiceCalls } from "../../utils/common";

export const authHandler = (state: authInitialState, action: authActionType) => {
    switch (action.type) {
        case "LOGIN":
            setupAuthHeaderForServiceCalls(action.payload.token);
            window.localStorage.setItem(
                "quizAppUserInfo",
                JSON.stringify({
                    userName: action.payload.userName,
                    token: action.payload.token
                })
            )
            return {
                loginStatus: true,
                userDetails: action.payload
            }
        case "LOGOUT":
            setupAuthHeaderForServiceCalls(null);
            window.localStorage.removeItem("quizAppUserInfo");
            return {
                loginStatus: false,
            }
    }
}