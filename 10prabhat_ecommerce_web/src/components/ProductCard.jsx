import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ id, name, image, new_price, old_price }) {
    return (
        <Link to={`/product/${id}`} className="group">
            {/* Image */}
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="h-auto object-cover group-hover:scale-105 transition"
                />
            </div>

            {/* Content */}
            <div className="mt-4">
                <p className="text-sm text-gray-700 leading-snug line-clamp-2">
                    {name}
                </p>

                <div className="flex items-center gap-3 mt-2">
                    <span className="font-bold text-black">${new_price}</span>
                    <span className="text-gray-400 line-through text-sm">
                        ${old_price}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
