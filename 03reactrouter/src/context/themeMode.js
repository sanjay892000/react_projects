import { createContext, useContext } from "react";

const themeModeContext = createContext({
    themeMode: "light",
    lightMode: () => {},
    darkMode: () => {}
})



export const ThemeStateProvider = themeModeContext.Provider;

export const useMyTheme = ()=>{
    return useContext(themeModeContext);
}