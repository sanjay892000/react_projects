import { Link } from "react-router-dom";
import signupImg from '../assets/signuppng.png'
const Signup = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-pink-100 via-white to-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

          {/* Left Illustration */}
          <div className="flex justify-center">
            <img
              src={signupImg} // 👈 replace with your image
              alt="Sign up Illustration"
              className="max-w-md w-full"
            />
          </div>

          {/* Right Form */}
          <div className="max-w-md w-full mx-auto">
            <h2 className="text-xl font-medium mb-8 text-center md:text-left">
              Sign up
            </h2>

            {/* Name */}
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-400 rounded-md px-5 py-3 mb-5 focus:outline-none"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Enter your email id"
              className="w-full border border-gray-400 rounded-md px-5 py-3 mb-5 focus:outline-none"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border border-gray-400 rounded-md px-5 py-3 mb-5 focus:outline-none"
            />

            {/* Confirm Password */}
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full border border-gray-400 rounded-md px-5 py-3 mb-6 focus:outline-none"
            />

            {/* Login Link */}
            <Link to="/login" className="text-sm">
              If you have an account?{" "}
              <span className="font-medium cursor-pointer hover:underline">
                Login
              </span>
            </Link>

            {/* Button */}
            <button className="w-44 mt-8 bg-red-500 hover:bg-red-600 text-white py-3 rounded-full font-medium block mx-auto md:mx-0">
              Sign up
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Signup;
