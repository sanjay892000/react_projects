import { createContext, useContext } from "react";

export const themeContext = createContext()

export const useThemeContext = () =>{
    return useContext(themeContext)
}