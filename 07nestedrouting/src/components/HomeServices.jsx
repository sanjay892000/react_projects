import React from 'react'

function HomeServices() {
    return (
        <div className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto bg-[url(https://www.hanumanttechnology.com/HanumantAdmin/SliderImage/Full-Stack%20Development%20Training.jpg)] bg-center">
            <div className="flex h-full flex-col items-center justify-center p-8 py-12 text-center bg-gray-200/80 dark:text-gray-800">
                <h1 className="py-4 text-5xl font-bold"><span className='text-rose-500'>Our Services</span></h1>
                <span className='font-bold capitalize'>New Batch start every Month</span>
                <p className="pb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quaerat voluptatem possimus ex laudantium facilis vel enim exercitationem quos quisquam eum autem pariatur iste nihil commodi voluptatum, qui quas harum aperiam magnam consectetur veniam, recusandae nostrum? Sapiente vel, amet perferendis mollitia provident, corporis soluta asperiores, natus itaque nobis in. Eveniet.</p>
                <svg className='h-8 w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            </div>
        </div>
    )
}

export default HomeServices
