import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

function Services() {
    return (
        <>
            <div className="dark:bg-gray-100 dark:text-gray-900">
                <div className="container grid grid-cols-12 mx-auto">
                    <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
                        <div className="pt-6 pb-4 space-y-2">
                            <h1 className="text-3xl font-bold capitalize"><span className='text-rose-500'>Web Development </span>
                                 New Batch Start</h1>
                            <span className='font-bold'>from 01 March</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                            <NavLink to="webdevelopment" rel="noopener noreferrer" className={({isActive})=>`${isActive? 'text-rose-600':'text-gray-800'} inline-flex items-center py-2 space-x-2 text-sm`}>
                                <span>Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </NavLink>
                        </div>
                        <div className="pt-6 pb-4 space-y-2">
                            <h1 className="text-3xl font-bold capitalize"><span className='text-rose-500'>Graphics Design </span>
                                 New Batch Start</h1>
                            <span className='font-bold'>from 01 May</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                            <NavLink to="graphics" rel="noopener noreferrer" className={({isActive})=>`${isActive? 'text-rose-600':'text-gray-800'} inline-flex items-center py-2 space-x-2 text-sm`}>
                                <span>Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </NavLink>
                        </div>
                        <div className="pt-6 pb-4 space-y-2">
                            <h1 className="text-3xl font-bold capitalize"><span className='text-rose-500'>AutoCad </span>
                                 New Batch Start</h1>
                            <span className='font-bold'>from 10 June</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                            <NavLink to="autocad" rel="noopener noreferrer" className={({isActive})=>`${isActive? 'text-rose-600':'text-gray-800'} inline-flex items-center py-2 space-x-2 text-sm`}>
                                <span>Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Services
