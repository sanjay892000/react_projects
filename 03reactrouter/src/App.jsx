
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
/* import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; */
/* import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import GitHub from './components/GitHub';
import { gitFetchData } from './components/GitFetchData';
import GitUser from './components/GitUser'; */
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeStateProvider } from './context/themeMode';

function App() {

  const [themeMode, setThemeMode] = useState('light')

  const lightMode = () => {
    setThemeMode('light')
  }
  const darkMode = () => {
    setThemeMode('dark')
  }
  useEffect(() => {
    const myHTML = document.querySelector('html')
    myHTML.classList.remove('light', 'dark')
    myHTML.classList.add(themeMode)
  }, [themeMode])
  
  return (
    <div className='dark:bg-gray-800'>
      <ThemeStateProvider value={{themeMode, lightMode, darkMode}}>
        <Navbar />
        <Outlet />
        <Footer />
      </ThemeStateProvider>
    </div>
    /*  <Router>
         <Navbar />
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/github" element={<GitHub />} loader={() => gitFetchData()} />
           <Route path='user/:userId' element={<GitUser />} />
        
       </Routes>
         <Footer />
     </Router> */
  )
}

export default App
