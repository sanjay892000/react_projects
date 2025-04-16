import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import GitHub from './components/GitHub';
import GitUser from './components/GitUser.jsx';
import {gitFetchData} from './components/GitFetchData.js';
import Login from './components/Login';
import Error from './components/Error';

/* const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App/>}>
        <Route path="" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/github" element={<GitHub/>} loader={()=>gitFetchData()} />
        <Route path='user/:userId' element={<GitUser/>}/>
      </Route>
    )
) */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
       element: <Home/>
      },
      {
        path: '/login',
       element: <Login/>
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
       },
      {
        path: '/gituser/:userId',
       element:<GitUser/>
       },
      {
        path: '*',
       element:<Error/>
       }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
