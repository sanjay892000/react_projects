import React, { useEffect } from 'react'
import about from '../image/about.jpg'
import about2 from '../image/about - awesome.jpeg'
import information from '../image/Information.png'
import { Link } from 'react-router-dom'
function About() {

    const goOnTheTop =()=>{
        window.scrollTo({top:0, behavior:'smooth'})
    }
    useEffect(()=>{
       goOnTheTop();
    },[])
    return (
        <section className="dark:bg-gray-100 px-12 md:px-6 dark:text-gray-800">
            <div className='lg:px-10 max-lg:px-0 py-5 relative flex justify-end max-lg:justify-center items-center'>
                <img className='h-98 object-cover w-full max-lg:opacity-50' src={about} alt="" />
                <div className='absolute lg:right-0 pr-14 w-1/3 max-lg:w-full max-lg:px-12 text-center'>
                    <h1 className='text-5xl max-lg:text-3xl max-lg:text-black text-white font-lightbold'>Empowering Students</h1>
                    <p className='mt-6 mb-8 max-lg:text-black text-white text-lg sm:mb-12'>An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee</p>
                </div>
            </div>

            <div className="container flex flex-col-reverse justify-center py-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-4xl">Make
                        Something
                        <span className="dark:text-rose-600"> Awesome</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">myNoteBook is made from the pain of writing all the things in notebook which is very hectic So we mad an online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee. you can also access your notes anywhere in your world, at anytime time . So dont forget to Create note because creating anything is always important
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link className="px-8 py-3 text-lg font-semibold border rounded bg-rose-500 text-white dark:border-rose-800">Create New Note</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={about2} alt="" className="object-cover h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
            <div className="container flex flex-col justify-center py-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={information} alt="" className="object-cover h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center py-6 pr-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-4xl">Powering the 
                        <span className="dark:text-rose-600"> internet’s visuals</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">How we started? The concept was simple. myNoteBook was born from the pain of writing all the things in notebook which is very hectic. An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link className="px-8 py-3 text-lg font-semibold border rounded bg-rose-500 text-white dark:border-rose-800">Sign up Now</Link>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default About
