import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Mens from './components/Mens.jsx'
import Womens from './components/Womens.jsx'
import Kids from './components/Kids.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import ProductCard from './components/ProductCard';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: "",
      element: <Home />
    },
    {
      path: "/mens",
      element: <Mens />
    },
    {
      path: "/womens",
      element: <Womens />
    },
    {
      path: "/kids",
      element: <Kids />
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signup",
      element: <Signup/>
    },
    {
      path: "/yourcart",
      element: <ProductCard/>
    }
  ]
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,

)
