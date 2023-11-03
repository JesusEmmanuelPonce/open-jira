import { FC, ReactNode } from "react";

import { UiContext } from "./";

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
    return (
        <UiContext.Provider value={{
            sideMenuOpen: false
        }}>
            {children}
        </UiContext.Provider>
    )
}

export default UiProvider
