import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <main className='px-20'>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
