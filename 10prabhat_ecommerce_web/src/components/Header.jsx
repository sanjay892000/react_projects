import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import logo from '../assets/logo.png'
import { Link, NavLink } from "react-router-dom";
import { useShopState } from "../contextapi/ShopState";

const Header = () => {

  const { cartItems } = useShopState()

  return (
    <nav className="w-full bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img className="h-15" src={logo} alt="" />
            <h1 className="text-xl font-semibold">
              <span className="text-black">PRABHAT</span>
              <span className="text-red-600 text-3xl">CENTER</span>
            </h1>
          </Link>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-10 text-black font-medium">
            <NavLink to="/" className={({isActive})=>`${isActive ? 'border-b-2 border-black text-red-500 font-extrabold' : ''} hover:text-red-600 cursor-pointer`}>
              Shop
            </NavLink>
            <NavLink to="/mens" className={({isActive})=>`${isActive ? 'border-b-2 border-black text-red-500 font-extrabold' : ''} hover:text-red-600 cursor-pointer`}>
              Mens
            </NavLink>
            <NavLink to="/womens" className={({isActive})=>`${isActive ? 'border-b-2 border-black text-red-500 font-extrabold' : ''} hover:text-red-600 cursor-pointer`}>
              Womens
            </NavLink>
            <NavLink to="/kids" className={({isActive})=>`${isActive ? 'border-b-2 border-black text-red-500 font-extrabold' : ''} hover:text-red-600 cursor-pointer`}>
              Kids
            </NavLink>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-12">
            {/* Cart */}
            <Link to="/carts" className="relative cursor-pointer">
              <ShoppingCartIcon className="h-7 w-7 text-black" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            </Link>

            {/* Login */}
            <Link to="/login" className="font-medium bg-red-500 py-2 px-4 rounded-sm text-white hover:bg-white hover:outline-1 hover:outline-red-500 hover:text-red-600">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
