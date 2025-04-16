import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import News from './components/News'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
         <Routes>
          <Route path="/" element={<News category="top"/>}/>
          <Route path="/education" element={<News category="education"/>}/>
          <Route path="/science" element={<News category="science"/>}/>
          <Route path="/technology" element={<News category="technology"/>}/>
          <Route path="/business" element={<News category="business"/>}/>
          <Route path="/health" element={<News category="health"/>}/>
          <Route path="/sports" element={<News category="sports"/>}/>
          <Route path="/politics" element={<News category="politics"/>}/>
          <Route path="/entertainment" element={<News category="entertainment"/>}/>
          <Route path="/other" element={<News category="other"/>}/>
         </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
