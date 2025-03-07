import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./componens/Navbar"
import News from './componens/News';
function App() {

  const country = "in"

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<News country={country} category="general"/>}/>
          <Route path="/general" element={<News country={country} category="general"/>}/>
          <Route path="/science" element={<News country={country} category="science"/>}/>
          <Route path="/technology" element={<News country={country} category="technology"/>}/>
          <Route path="/business" element={<News country={country} category="business"/>}/>
          <Route path="/health" element={<News country={country} category="health"/>}/>
          <Route path="/sports" element={<News country={country} category="sports"/>}/>
          <Route path="/entertainment" element={<News country={country} category="entertainment"/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
