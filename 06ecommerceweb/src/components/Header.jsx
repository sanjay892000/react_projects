import Logo from '../assets/logo_big.png';
import CartLogo from '../assets/cart_icon.png'
import { Link, NavLink } from 'react-router-dom';
function Header() {
    return (
        <header className='flex justify-between items-center py-4'>
            <NavLink to="/"><img className='h-20' src={Logo} alt="" /></NavLink>
            <div className='flex justify-between items-center mx-4'>
                <NavLink to="/" className={({isActive})=>`mx-7 ${isActive ? 'text-orange-600' : 'text-gray-700'} text-xl text-gray-700 capitalize font-semibold`} href="">shops</NavLink>
                <NavLink to="/mens" className={({isActive})=>`mx-7 ${isActive ? 'text-orange-600' : 'text-gray-700'} text-xl text-gray-700 capitalize font-semibold`} href="">mens</NavLink>
                <NavLink to="womens" className={({isActive})=>`mx-7 ${isActive ? 'text-orange-600' : 'text-gray-700'} text-xl text-gray-700 capitalize font-semibold`} href="">womens</NavLink>
                <NavLink to="kids" className={({isActive})=>`mx-7 ${isActive ? 'text-orange-600' : 'text-gray-700'} text-xl text-gray-700 capitalize font-semibold`} href="">kids</NavLink>
            </div>
            <div className='flex justify-between items-center'>
                <NavLink to="yourcart"><img src={CartLogo} alt="" /></NavLink>
                <Link to="login" className='mx-7 text-xl text-gray-700 capitalize font-semibold border-2 rounded-lg bg-orange-300 py-1.5 px-5 border-solid border-orange-600 hover:bg-orange-600' href="">login</Link>
            </div>
        </header>
    )
}

export default Header
