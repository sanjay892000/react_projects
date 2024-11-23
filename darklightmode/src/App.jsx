import { useEffect, useState } from 'react'
import './App.css'
import MyCard from './components/MyCard'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './context/ThemeMode'

function App() {

  const [themeMode, setThemeMode] = useState('light')

  const lightMode = () => {
    setThemeMode('light')
  }
  const darkMode = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    let myHTML = document.querySelector('html');

    myHTML.classList.remove('light', 'dark')

    myHTML.classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <MyCard />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
