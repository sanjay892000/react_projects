import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import TrustbyUsers from './TrustbyUsers'
import Reviews from './Reviews';

function Home() {
  return (
    <>
      <section
        className="relative bg-[url(https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Best IT Company &

              <strong className="block font-extrabold text-rose-500"> No.1 Training Institute </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              We offer India's Best IT Services and Training Programs at an affordable price. For the past year, we have built a reputation for creating a positive return on investment for our students and clients.
              <Outlet />
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link to="login"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </Link>

              <Link to="learnmore"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <TrustbyUsers />
      <Reviews />
      <div className="w-full">
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-800">Get Our Updates</h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-800">Find out about events and other news</p>
          <div className="flex flex-row">
            <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" fdprocessedid="q7vti5" />
            <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-600 dark:text-gray-50" fdprocessedid="qcuzix">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
