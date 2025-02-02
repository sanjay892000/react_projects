import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Notes from './components/Notes'
import About from './components/About'
import Contact from './components/Contact'
import CreateNote from './components/CreateNote'
import ErrorPage from './components/ErrorPage'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/createnote" element={<CreateNote />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
