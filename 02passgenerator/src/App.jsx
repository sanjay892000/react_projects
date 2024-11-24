import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import PassGen from './components/PassGen'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  const [themeMode, setThemeMode] = useState('light')

  const lightMode = () => {
    setThemeMode('light')
  }
  const darkMode = () => {
    setThemeMode('dark')
    }

    useEffect(()=>{
      const myHTML = document.querySelector('html');
      myHTML.classList.remove('light', 'dark');
      myHTML.classList.add(themeMode)
    },[themeMode])

  return (
    <ThemeProvider value={{themeMode, lightMode, darkMode}}>
    <Header/>
    <PassGen/>
    </ThemeProvider>
  )
}

export default App
