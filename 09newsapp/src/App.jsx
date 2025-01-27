import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./componens/Navbar"
import News from './componens/News';
import { useEffect, useState } from "react";

function App() {

  const [newsData, setNewsData] = useState([]);
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('in');
  const apiKey = '2b5543f5507ba4cdb6f13077d0d6fe16'
  const fetchNews = async () => {
    const response = await fetch(`https://api.mediastack.com/v1/news?access_key=${apiKey}&categories=${category}&countries=${country}`);
    const data = await response.json();
    console.log(data.data)
    setNewsData(data.data);
  }

  useEffect(() => {
    fetchNews();
  }, [category])

  return (
    <div>
      <Router>
        <Navbar setCategory={setCategory} />
        <Routes>
          <Route path="/" element={<News category={category} newsData={newsData} />} />
          <Route path="/general" element={<News category={category} newsData={newsData} />} />
          <Route path="/science" element={<News category={category} newsData={newsData} />} />
          <Route path="/technology" element={<News category={category} newsData={newsData} />} />
          <Route path="/business" element={<News category={category} newsData={newsData} />} />
          <Route path="/health" element={<News category={category} newsData={newsData} />} />
          <Route path="/sports" element={<News category={category} newsData={newsData} />} />
          <Route path="/entertainment" element={<News category={category} newsData={newsData} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
