import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import GitHub from './components/GitHub';
import GitUser from './components/GitUser.jsx';
import {gitFetchData} from './components/GitFetchData.js';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App/>}>
        <Route path="" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/github" element={<GitHub/>} loader={()=>gitFetchData()} />
        <Route path='user/:userId' element={<GitUser/>}/>
      </Route>
    )
)
/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
       element: <Home/>
      },
      {
        path: '/about',
       element: <About/>
      },
      {
        path: '/contact',
       element:<Contact/>
      },
      {
        path: '/github',
       element:<GitHub/>,
       loader:()=>gitFetchData()
       }
    ]
  }
]) */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
