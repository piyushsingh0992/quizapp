import { modalType, modalPayloadType } from "../../types/types";

export function modalHandler(state: modalType, action: modalPayloadType) {
    switch (action.type) {
        case "SHOW_RULES":
            return {
                ...state, showRulesModal: true,
                showSubmitModal: false,
                showScoreModal: false,
            };

        case "HIDE_RULES":
            return {
                ...state, showRulesModal: false,
                showSubmitModal: false,
                showScoreModal: false,
            };

        case "SHOW_SUBMIT":
            return {
                ...state, showRulesModal: false,
                showSubmitModal: true,
                showScoreModal: false
            };
        case "HIDE_SUBMIT":
            return {
                ...state, showRulesModal: false,
                showSubmitModal: false,
                showScoreModal: false,
            };
        case "SHOW_SCORE":
            return {
                ...state, showRulesModal: false,
                showSubmitModal: false,
                showScoreModal: true
            };
        case "HIDE_SCORE":
            return {
                ...state, showRulesModal: false,
                showSubmitModal: false,
                showScoreModal: false,
            };
    }




}
