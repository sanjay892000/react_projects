import Footer from './components/Footer'
import Header from './components/Header'
import ShopPage from './pages/ShopPage'
import { Route, Routes } from 'react-router-dom'
import ShopCategory from './pages/ShopCategory'
import mens_banner from './assets/mens_banner.png'
import womens_banner from './assets/women_banner.png'
import kids_banner from './assets/kids_banner.png'
import ProductDetails from './pages/ProductDetails'
import Carts from './pages/Carts'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ShopPage />} />
        <Route path='/mens' element={<ShopCategory banner={mens_banner} category="men" />} />
        <Route path='/womens' element={<ShopCategory banner={womens_banner} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
        <Route path='/product' element={<ProductDetails />}>
          <Route path=':productid' element={<ProductDetails />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/carts' element={<Carts />} /> 
      </Routes>
      <Footer />
    </>
  )
}

export default App
