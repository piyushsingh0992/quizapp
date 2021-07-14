import { createContext, useContext, useState, ReactNode } from "react";
import { errorContextType } from "../../types/types"


const ErrorContext = createContext({} as errorContextType);

export function ErrorProvider({ children }: { children: ReactNode }) {
    const [errorState, errorSetter] = useState<boolean>(false);

    function errorDispatch(status: "ERROR" | "RESOLVE") {
        switch (status) {
            case "ERROR":
                errorSetter(true);
                break;
            case "RESOLVE":
                errorSetter(false);
                break;
        }
    }

    return (
        <ErrorContext.Provider value={{ errorState, errorDispatch }}>
            {children}
        </ErrorContext.Provider>
    );
}


export function useError() {
    return useContext(ErrorContext);
}