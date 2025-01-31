import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';

function Services() {
    return (
            <div className="flex justify-between border-e bg-white">
                <div className="px-4 py-6 w-1/6">
                    <ul className="mt-6 space-y-1">
                        <li>
                            <NavLink to="" className="block rounded-lg my-8 bg-gray-100 px-4 py-4 text-sm font-medium text-gray-700">
                                Web Development
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="graphics" className={({isActive})=>`${isActive ? 'text-rose-500' : 'text-gray-700'} block rounded-lg my-8 bg-gray-100 px-4 py-4 text-sm font-medium text-gray-700`}
                            >
                                Graphics Design
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="autocad" className={({isActive})=>`${isActive ? 'text-rose-500' : 'text-gray-700'} block rounded-lg my-8 bg-gray-100 px-4 py-4 text-sm font-medium text-gray-700`}
                            >
                                AutoCad
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Outlet/>
            </div>
    )
}

export default Services
