import heroImg from '../assets/hero_image.png'
import handImg from '../assets/hand_icon.png'
import arrowImg from '../assets/arrow.png'

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-pink-100 via-white to-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* Left Content */}
          <div>
            <p className="text-sm text-gray-700 font-semibold mb-3">
              New Arrivals Only
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black">
              new <span className="inline-block">
                <img className='h-20' src={handImg} alt="" />
              </span>
              <br />
              collection
              <br />
              for everyone
            </h1>

            <button className="mt-8 inline-flex items-center text-xl gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-medium transition">
              Latest Collection
                <img className='h-3 w-5' src={arrowImg} alt="" />
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={heroImg}  // 👈 replace with your image path
              alt="New Collection"
              className="max-w-sm md:max-w-md object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
