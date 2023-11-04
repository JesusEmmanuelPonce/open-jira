import { FC, ReactNode, useReducer } from "react";

import { UiContext, UiReducer } from "./";

export interface IUIState {
    sideMenuOpen: boolean;
}

const UI_INITIAL_STATE: IUIState = {
    sideMenuOpen: false,
}

interface IUiProviderProps {
    children: ReactNode
}

const UiProvider: FC<IUiProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(UiReducer, UI_INITIAL_STATE)

    return (
        <UiContext.Provider value={{
            sideMenuOpen: false
        }}>
            {children}
        </UiContext.Provider>
    )
}

export default UiProvider
