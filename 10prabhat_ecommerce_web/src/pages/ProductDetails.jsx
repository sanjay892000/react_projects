import React, { useEffect, useState } from 'react'
import { useShopState } from '../contextapi/ShopState';
import { useParams } from 'react-router-dom';

function ProductDetails() {

    const { allProduct, addToCart } = useShopState()
    const { productid } = useParams()
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(allProduct.find(elm => elm.id == productid));
    }, [productid])


    const sizes = ["S", "M", "L", "XL", "XXL"];
    const [selectedSize, setSelectedSize] = useState(null);

    const addProductFun = () => {
        if (!selectedSize) {
            alert("Please select a size");
            return;
        }
        addToCart(product, selectedSize);
    }


    return (
        <section className="max-w-7xl mx-auto px-6 py-10">

            {/* Breadcrumb */}
            <p className="text-sm text-gray-600 mb-6">
                Home &gt; Shop &gt; men &gt;{" "}
                <span className="text-black font-medium">
                    {product.name}
                </span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Left Images */}
                <div className="flex gap-4">

                    {/* Thumbnails */}
                    <div className="flex flex-col justify-between gap-3">

                        <img
                            src={product.image}
                            alt="product thumbnail"
                            className={`w-20 h-24 object-cover border cursor-pointer border-gray-300`}
                        />
                        <img
                            src={product.image}
                            alt="product thumbnail"
                            className={`w-20 h-24 object-cover border cursor-pointer border-gray-300`}
                        />
                        <img
                            src={product.image}
                            alt="product thumbnail"
                            className={`w-20 h-24 object-cover border cursor-pointer border-gray-300`}
                        />
                        <img
                            src={product.image}
                            alt="product thumbnail"
                            className={`w-20 h-24 object-cover border cursor-pointer border-gray-300`}
                        />
                    </div>

                    {/* Main Image */}
                    <div className="flex-1">
                        <img
                            src={product.image}
                            alt="product"
                            className="w-full max-h-[500px] object-contain"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div>
                    <h1 className="text-2xl font-semibold mb-2">
                        {product.name}
                    </h1>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-orange-500 text-lg">★★★★★</span>
                        <span className="text-sm text-gray-600">(3,045)</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-2xl font-bold">${product.new_price}</span>
                        <span className="text-gray-400 line-through">${product.old_price}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6">
                        Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket.
                        Perfect for modern and stylish looks.
                    </p>

                    {/* Size Selector */}
                    <div className="mb-6">
                        <p className="font-medium mb-2">Select Your size</p>
                        <div className="flex gap-3">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-12 cursor-pointer h-10 border ${selectedSize === size
                                        ? "border-black bg-black text-white"
                                        : "border-gray-400"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart */}
                    <button className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-10 py-4 rounded-full font-medium mb-6" onClick={addProductFun}>
                        ADD TO CART
                    </button>

                    {/* Meta Info */}
                    <div className="text-sm text-gray-700 space-y-5">
                        <p className='capitalize'>
                            <span className="font-medium">Category:</span> {product.category}
                        </p>
                        <p className='capitalize'>
                            <span className="font-medium">Tag:</span> Modern, Latest
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProductDetails
