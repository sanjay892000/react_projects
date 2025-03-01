import { createContext, useContext } from "react";
import { themeContext } from './ThemeMode';

export const themeContext = createContext({
    theme:'light',
    lightMode:()=>{},
    darkMode:()=>{}
})

export const ThemeState = themeContext.Provider;

export const useTheme = ()=>{
    return useContext(themeContext)
}