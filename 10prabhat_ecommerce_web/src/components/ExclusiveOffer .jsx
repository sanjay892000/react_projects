import ExclusiveImg from '../assets/exclusive_image.png'

const ExclusiveOffer = () => {
    return (
        <div className='bg-gradient-to-b from-pink-100 via-white to-white'>
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className=" rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center p-10">

                        {/* Left Content */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                                Exclusive <br /> Offer for You
                            </h2>

                            <p className="mt-4 text-sm font-semibold text-gray-700 uppercase">
                                Only on best sellers products
                            </p>

                            <button className="mt-6 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-medium transition">
                                check now
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-end">
                            <img
                                src={ExclusiveImg} // 👈 replace with your image path
                                alt="Exclusive Offer"
                                className="max-h-[450px] object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </div>

    );
};

export default ExclusiveOffer;
