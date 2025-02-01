import React from 'react'
import { Link } from 'react-router-dom'

function WebDev() {
    return (
        <div className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto bg-[url(https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-center">
            <div className="flex h-full flex-col items-center justify-center p-8 py-12 text-center bg-gray-200/75 dark:text-gray-800">
                <h1 className="py-4 text-5xl font-bold"><span className='text-rose-500'>Web Development</span><br /> New Batch Start</h1>
                <span className='font-bold'>from 12 March</span>
                <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                <Link className='py-3 px-5 bg-rose-500 rounded-md text-white font-semibold' to="/login">Enroll Now</Link>
            </div>
        </div>
    )
}

export default WebDev
