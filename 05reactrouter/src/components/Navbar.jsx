/* import { Link } from "react-router-dom"; */
import { Link, NavLink } from 'react-router-dom'
import sunlogo from '../assets/sunlogo.png'
/* import { useMyTheme } from '../context/themeMode' */
import { IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useEffect, useState } from 'react';
function Navbar() {

        const [themeMode, setThemeMode] = useState('light')
        const changeMode = () => {
           const newTheme = themeMode === 'light' ? "dark" : "light";
           setThemeMode(newTheme)
           localStorage.setItem('theme', newTheme)
        }

        useEffect(() => {
            const changeTheme = localStorage.getItem('theme');
            const myHTML = document.querySelector('html')
            myHTML.classList.remove('light', 'dark')
            myHTML.classList.add(changeTheme)
          }, [themeMode])

    return (
        <header className="shadow-lg sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={sunlogo}
                            className="mr-3 h-14"
                            alt="Logo"
                        /><span className='text-xl uppercase font-bold text-orange-950 dark:text-white'>Prabhat</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                        <IconButton onClick={changeMode}>
                           {themeMode ==='light' ? <Brightness7Icon fontSize="large" className='text-gray-800'/> : <Brightness4Icon fontSize="large" className='text-blue-300'/>}
                        </IconButton>

                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 hover:underline ${isActive ? "text-orange-700 dark:text-orange-700" : "text-gray-700 dark:text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 hover:underline duration-200 ${isActive ? "text-orange-700 dark:text-orange-700" : "text-gray-700 dark:text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 hover:underline duration-200 ${isActive ? "text-orange-700 dark:text-orange-700" : "text-gray-700 dark:text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 hover:underline duration-200 ${isActive ? "text-orange-700 dark:text-orange-700" : "text-gray-700 dark:text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
