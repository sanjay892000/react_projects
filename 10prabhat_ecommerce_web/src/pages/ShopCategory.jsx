import { useEffect, useState } from 'react'
import ShowCollection from '../components/ShowCollection'
import { useShopState } from '../contextapi/ShopState'

function ShopCategory({ banner, category }) {

    const { allProduct } = useShopState()

    const [collection, setCollection] = useState([])
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState("Sort by");

    const options = [
        "Price: Low to High",
        "Price: High to Low",
        "Newest",
        "Popular",
    ];

    useEffect(() => {
        setCollection(allProduct.filter((product) => product.category === category))
    }, [category])


    return (
        <>
            <section>
                <div className="w-full bg-gradient-to-r from-pink-100 via-white to-white">
                    <div className="px-6 py-10 max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                            {/* Left Content */}
                            <div>
                                <h1 className="text-5xl md:text-6xl font-bold text-orange-500">
                                    FLAT 50% OFF
                                </h1>

                                <p className="mt-4 text-2xl text-gray-800 font-medium">
                                    12 Hours <span className="text-orange-500">20</span> Mins
                                </p>

                                <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-medium transition">
                                    Explore now
                                </button>
                            </div>

                            {/* Right Image */}
                            <div className="flex justify-center md:justify-end pr-16">
                                <img
                                    src={banner} // 👈 replace with your image path
                                    alt="Flat Offer"
                                    className="max-h-[350px] object-contain"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

                {/* Left Text */}
                <p className="text-black text-sm md:text-base">
                    <span className="font-semibold">Showing {collection?.length}</span> out of 36 products
                </p>

                {/* Sort Dropdown */}
                <div className="relative inline-block text-sm">
                    {/* Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-2 border border-gray-400 rounded-full px-5 py-2 bg-white cursor-pointer"
                    >
                        {sort}
                        <span className="text-xs">▼</span>
                    </button>

                    {/* Dropdown */}
                    {open && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-md z-50">
                            {options.map((item) => (
                                <div
                                    key={item}
                                    onClick={() => {
                                        setSort(item);
                                        setOpen(false);
                                    }}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
            <section className="max-w-7xl mx-auto px-6 py-4">
                <ShowCollection collection={collection} category={category} />
            </section>
        </>
    )
}

export default ShopCategory
