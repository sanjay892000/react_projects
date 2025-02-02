import React from 'react'
import noteImg from '../image/Bullet_journal.png'
import { Link } from 'react-router-dom'
import Reviews from './Reviews'
import CreateNote from './CreateNote'
function Home() {
    return (

        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                        <span className="dark:text-rose-600">my</span>NoteBook
                    </h1>
                    <p className='text-2xl mt-7 font-bold'>Your Notebook on Cloud - Safe and Secure</p>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee. For more info you can checkout our
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link to="/createnote" className="px-8 py-3 text-lg font-semibold rounded dark:bg-rose-600 dark:text-gray-50">Create Notes</Link>
                        {/* <Link to="/login" className="px-8 py-3 text-lg font-semibold rounded dark:bg-rose-600 dark:text-gray-50">Get Started</Link> */}
                        <Link to="/about" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Read More</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={noteImg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
            <Reviews />
            <div className="mx-auto py-6 max-w-md">
                <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
                    Subscribe now for ore Updates
                </strong>

                <form className="mt-6 px-6">
                    <div className="relative max-w-lg">
                        <label className="sr-only" htmlFor="email"> Email </label>

                        <input
                            className="w-full outline-none border rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                            id="email"
                            type="email"
                            placeholder="john@doe.com"
                        />

                        <button
                            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-rose-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-rose-700"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Home
