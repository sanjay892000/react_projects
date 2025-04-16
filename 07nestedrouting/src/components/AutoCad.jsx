import React from 'react'
import { Link } from 'react-router-dom'

function AutoCad() {
    return (
        <div className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto bg-[url(https://www.hanumanttechnology.com/HanumantAdmin/SliderImage/Full-Stack%20Development%20Training.jpg)] bg-center">
            <div className="flex h-full flex-col items-center justify-center p-8 py-12 text-center bg-gray-200/75 dark:text-gray-800">
                <h1 className="py-4 text-5xl font-bold"><span className='text-rose-500'>AutoCad</span><br /> New Batch Start</h1>
                <span className='font-bold'>from 10 June</span>
                <p className="pb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae aliquid magni nostrum. Exercitationem, reiciendis. Necessitatibus mollitia tenetur aliquid in nihil fuga esse, quasi deserunt dolore facilis enim expedita quas eum. Voluptas inventore magni distinctio autem temporibus quasi, culpa numquam omnis? At magni minima cum inventore voluptates ex doloribus labore possimus, molestias totam nam beatae accusamus ipsa rerum nihil eum autem? Sint eius veritatis inventore delectus, omnis ullam rem aperiam atque perspiciatis cumque excepturi voluptas? Sint pariatur accusantium sunt cum doloremque sapiente quisquam ab, laudantium unde vel? Aperiam voluptas enim blanditiis dolorum harum cum ducimus explicabo? Illum nulla at nostrum molestias?</p>
                <Link className='py-3 px-5 bg-rose-500 rounded-md text-white font-semibold' to="/login">Enroll Now</Link>
            </div>
        </div>
    )
}

export default AutoCad
