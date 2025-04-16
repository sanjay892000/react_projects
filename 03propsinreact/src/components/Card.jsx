import React from "react";

function Card({name,role,image, birth, country}) {
   
  return (
    <article className="overflow-hidden w-1/4 rounded-lg border border-gray-100 bg-white shadow-xs">
      <img
        alt=""
        src={image}
        className="h-56 w-full object-cover"
      />

      <div className="p-4 sm:p-6">
        <a href="#">
          <h3 className="text-lg font-bold capitalize text-gray-900">Name: 
           <span className="font-[500] mx-2">{name}</span>
          </h3>
        </a>

        <p className="mt-2 font-bold capitalize line-clamp-3 text-sm/relaxed text-gray-500">
        Role:<span className="font-[500] mx-2">{role}</span>
        </p>
        <p className="mt-2 font-bold capitalize line-clamp-3 text-sm/relaxed text-gray-500">
        Birth Place:<span className="font-[500] mx-2">{birth}</span>
        </p>
        <p className="mt-2 font-bold capitalize line-clamp-3 text-sm/relaxed text-gray-500">
        Country:<span className="font-[500] mx-2">{country}</span>
        </p>

        <a
          href="#"
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          read more
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
          >
            &rarr;
          </span>
        </a>
      </div>
    </article>
  );
}

export default Card;
