import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import WebDev from './components/WebDev';
import Graphics from './components/Graphics';
import AutoCad from './components/AutoCad';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';
import GitHub from './components/GitHub';
import HomeServices from './components/HomeServices';
import Team from './components/Team';
import { ThemeState } from './contextapi/ThemeMode';
import { useState } from 'react';


function App() {

  const [theme, setTheme] = useState('light')
  const lightMode = ()=>{
    setTheme('light')
  }
  const darkMode = ()=>{
    setTheme('dark')
  }

  return (
    <ThemeState value={{theme, lightMode, darkMode}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} >
            <Route path="learnmore" element={<p>We provide theoretical and practical knowledge to our students for skills development in detail.</p>} />
          </Route>
          <Route path="services" element={<Services />} >
            <Route path="" element={<HomeServices />} />
            <Route path="webdevelopment" element={<WebDev />} />
            <Route path="graphics" element={<Graphics />} />
            <Route path="autocad" element={<AutoCad />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="github" element={<GitHub />} />
          <Route path="myteam" element={<Team />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeState>
  )
}

export default App
