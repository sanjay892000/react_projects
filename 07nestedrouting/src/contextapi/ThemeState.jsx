import React, { useState } from 'react'
import { themeContext } from './themeContext';

function ThemeState(props) {
    const [theme, setTheme] = useState('light')

   const lightMode = () => {
        setTheme('light')
    }

   const darkMode = () => {
        setTheme('dark')
    }

    return (
        <themeContext.Provider value={{theme, setTheme, lightMode, darkMode}}>
            {props.children}
        </themeContext.Provider>
    )
}

export default ThemeState;
