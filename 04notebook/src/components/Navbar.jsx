import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex justify-between h-16 mx-auto">
                    <a aria-label="Back to homepage" className="flex items-center p-2">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-rose-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-50">
                                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                            </svg>
                        </div>
                    </a>
                    <div className="flex items-center max-lg:hidden -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                        <NavLink to="/" className={({ isActive }) => `${isActive ? 'border border-b-0 rounded-t-lg' : 'border-b'} flex items-center flex-shrink-0 px-5 py-3 space-x-2 dark:border-gray-600 dark:text-gray-900`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>

                            <span>Home</span>
                        </NavLink>
                        <NavLink to="notes" className={({ isActive }) => `${isActive ? 'border border-b-0 rounded-t-lg' : 'border-b'} flex items-center flex-shrink-0 px-5 py-3 space-x-2 dark:border-gray-600 dark:text-gray-900`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                            <span>Notes</span>
                        </NavLink>
                        <NavLink to="about" className={({ isActive }) => `${isActive ? 'border border-b-0 rounded-t-lg' : 'border-b'} flex items-center flex-shrink-0 px-5 py-3 space-x-2 dark:border-gray-600 dark:text-gray-900`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <span>About</span>
                        </NavLink>
                        <NavLink to="contact" className={({ isActive }) => `${isActive ? 'border border-b-0 rounded-t-lg' : 'border-b'} flex items-center flex-shrink-0 px-5 py-3 space-x-2 dark:border-gray-600 dark:text-gray-900`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                            </svg>
                            <span>Contact</span>
                        </NavLink>
                    </div>
                    <div className="flex items-center md:space-x-4">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="submit" title="Search" className="p-1 focus:outline-none" fdprocessedid="tgayn">
                                    <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
                                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                    </svg>
                                </button>
                            </span>
                            <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 pr-2 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50" />
                        </div>
                        <Link to="/login" className="hidden px-6 py-2 font-semibold rounded lg:block dark:bg-rose-600 dark:text-gray-50" fdprocessedid="83yogu">Log in</Link>
                        <button title="Open menu" type="button" className="p-4 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
