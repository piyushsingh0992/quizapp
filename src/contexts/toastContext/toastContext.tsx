import { createContext, useContext, useState, ReactNode } from "react";
import { toastContextType, toastStateType } from "../../types/types"


const ToastContext = createContext({} as toastContextType);



export function ToastProvider({ children }: { children: ReactNode }) {
    const [toastState, toastSetter] = useState<toastStateType>({
        trigger: false, type: "",
        message: ""
    });

    function toastDispatch(type: string, message?: string) {
        switch (type) {
            case "RESET":
                toastSetter({
                    trigger: false, type: "",
                    message: ""
                });
                break;
            default:
                toastSetter({ trigger: true, type, message: message ? message : "" });
                break;
        }
    }

    return (
        <ToastContext.Provider value={{ toastState, toastDispatch }}>
            {children}
        </ToastContext.Provider>
    );
}

export function useToast() {
    return useContext(ToastContext);
}
