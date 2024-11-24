import { createContext, useContext } from "react";


export const MyThemeContext = createContext(
    {
        themeMode: 'light',
        lightMode:()=>{},
        darkMode:()=>{}
    }
)

export const ThemeProvider = MyThemeContext.Provider;

export const useMyTheme=()=>{
    return useContext(MyThemeContext)
}