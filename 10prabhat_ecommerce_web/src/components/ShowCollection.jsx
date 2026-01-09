import React from 'react'
import ProductCard from './ProductCard'

function ShowCollection({ collection }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
            {collection.map((item) => (
                <ProductCard key={item.name+item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            ))}
        </div>
    )
}

export default ShowCollection
