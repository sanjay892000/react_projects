import React from 'react'
import { Link } from 'react-router-dom';

function Graphics() {
    return (
        <div className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto bg-[url(https://www.hanumanttechnology.com/HanumantAdmin/SliderImage/Graphic%20Designing%20Training.jpg)] bg-center">
            <div className="flex h-full flex-col items-center justify-center p-8 py-12 text-center bg-gray-200/75 dark:text-gray-800">
                <h1 className="py-4 text-5xl font-bold"><span className='text-rose-500'>Graphics Design</span><br />New Batch Start</h1>
                <span className='font-bold'>from 01 May</span>
                <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque hic, veritatis necessitatibus magnam consequatur minus iusto commodi incidunt officiis beatae delectus reiciendis quisquam repellat earum, itaque laudantium amet ipsam alias quis illum odio sapiente cum temporibus. Maxime expedita fugiat quidem quisquam excepturi nobis doloribus eos tempora ut perspiciatis rerum quos quas perferendis beatae saepe odio esse, temporibus voluptatibus reprehenderit non inventore cumque eligendi hic. Pariatur esse aliquid placeat, voluptatibus nesciunt laborum earum quos soluta! Tempora voluptate quis magni ipsa facere eius tempore, recusandae impedit fugit eligendi magnam voluptatum ipsum maiores adipisci illum, iste aperiam nobis cupiditate voluptas accusantium soluta nihil?</p>
                <Link className='py-3 px-5 bg-rose-500 rounded-md text-white font-semibold' to="/login">Enroll Now</Link>
            </div>
        </div>
    )
}

export default Graphics
