import { Link } from "react-router-dom";
import loginImg from '../assets/loginpng.png'
const Login = () => {
  return (
    <section className="py-26 bg-gradient-to-b from-pink-100 via-white to-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

          {/* Left Illustration */}
          <div className="flex justify-center">
            <img
              src={loginImg} // 👈 replace with your image
              alt="Login Illustration"
              className="max-w-md w-full"
            />
          </div>

          {/* Right Form */}
          <div className="max-w-md w-full mx-auto">
            <h2 className="text-xl font-medium mb-8 text-center md:text-left">
              Sign in
            </h2>

            {/* Email */}
            <input
              type="email"
              placeholder="Enter your email id"
              className="w-full border border-gray-400 rounded-md px-5 py-3 mb-6 focus:outline-none"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-400 rounded-md px-5 py-3 mb-4 focus:outline-none"
            />

            {/* Links */}
            <div className="flex justify-between text-sm mb-8">
              <Link to="/signup">
                Don&apos;t have an account?{" "}
                <span className="font-medium cursor-pointer hover:underline">
                  Sign up
                </span>
              </Link>
              <span className="cursor-pointer hover:underline">
                Forgot password? Reset
              </span>
            </div>

            {/* Button */}
            <button className="w-40 bg-red-500 hover:bg-red-600 text-white py-3 rounded-full font-medium block mx-auto md:mx-0">
              Login
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Login;
