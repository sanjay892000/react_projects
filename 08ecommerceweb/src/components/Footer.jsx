import { Link, NavLink } from "react-router-dom"

function Footer() {
  return (
    <footer>
    <div className="">
        <div className="flex  items-center justify-between">
            <div className="py-6">
                <span className="text-2xl font-semibold">PRABHAT</span>
                <span className="text-3xl text-red-600 font-semibold">CENTER</span>
            </div>
            <div className="flex gap-x-7 text-white">
                <Link className="bg-blue-700 h-10 w-10 rounded-full flex justify-center items-center" to="https://www.facebook.com/profile.php?id=100010363560624&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true"><i className="fab fa-facebook-f text-xl"></i></Link>
                <Link className="bg-blue-400 h-10 w-10 rounded-full flex justify-center items-center" to="https://twitter.com/sanjayk21415502"><i className="fab fa-twitter text-xl"></i></Link>
                <Link className="bg-pink-600 h-10 w-10 rounded-full flex justify-center items-center" to="https://www.instagram.com/sanjay_singh.15/"><i className="fab fa-instagram text-xl"></i></Link>
                <Link className="bg-blue-500 h-10 w-10 rounded-full flex justify-center items-center" to="https://www.linkedin.com/in/sanjay-kumar-singh-844a62222/"><i className="fab fa-linkedin-in text-xl"></i></Link>
                <Link className="bg-red-600 h-10 w-10 rounded-full flex justify-center items-center" to="https://www.youtube.com/channel/UCifxJcmCzfNGOOkxvd0tR0g"><i className="fab fa-youtube text-xl"></i></Link>
            </div>
        </div>
        <div className="flex justify-between items-center w-screen flex-wrap">
            <ul className="w-1/4 max-lg:w-1/4 max-md:w-1/2 max-sm:w-full">
                <li className="my-2 capitalize text-gray-700 font-bold">Company</li>
                <li className="my-2 capitalize text-gray-700"><NavLink className={({isActive})=>`${isActive? 'text-orange-600 font-semibold' : 'text-gray-700'}`} to="/">Home</NavLink></li>
                <li className="my-2 capitalize text-gray-700"><NavLink className={({isActive})=>`${isActive? 'text-orange-600 font-semibold' : 'text-gray-700'}`} to="/mens">Mens</NavLink></li>
                <li className="my-2 capitalize text-gray-700"><NavLink className={({isActive})=>`${isActive? 'text-orange-600 font-semibold' : 'text-gray-700'}`} to="/womens">Womens</NavLink></li>
                <li className="my-2 capitalize text-gray-700"><NavLink className={({isActive})=>`${isActive? 'text-orange-600 font-semibold' : 'text-gray-700'}`} to="/kids">Kids</NavLink></li>
            </ul>
            <ul className="w-1/4 max-lg:w-1/4 max-md:w-1/2 max-sm:w-ful">
                <li className="my-2 capitalize text-gray-700 font-bold">Get to Know Us</li>
                <li className="my-2 capitalize text-gray-700"><Link to="/c/61554bfe801949ad7b9be4ff">About Us</Link></li>
                <li className="my-2 capitalize text-gray-700"><Link to="/c/61554bfe801949ad7b9be4ff">Careers</Link></li>
                <li className="my-2 capitalize text-gray-700"><Link to="/c/61554bfe801949ad7b9be4ff">Press Releases</Link></li>
                <li className="my-2 capitalize text-gray-700"><Link to="/c/61554bfe801949ad7b9be4ff">Prabhat Center Science</Link></li>
            </ul>
            <ul className="w-1/4 max-lg:w-1/4 max-md:w-1/2 max-sm:w-ful">
                <li className="my-2 capitalize text-gray-700 font-bold">Make Money with Us</li>
                <li className="my-2 capitalize text-gray-700"><Link to="/c/61554bfe801949ad7b9be4ff">Sell on Prabhat Center</Link></li>
                <li className="my-2 capitalize text-gray-700"><Link to="/c/61554c2753bcf306407cb1bd">Protect & build your brand</Link></li>
                <li className="my-2 capitalize text-gray-700"><Link to="/c/61554c43d2a6b15f764aff36">Prabhat Global Selling</Link></li>
                <li className="my-2 capitalize text-gray-700"><Link to="c/61554c63dfd6a37d71449b5c">Advertise Your Product</Link></li>
            </ul>
            <ul className="w-1/4 max-lg:w-1/4 max-md:w-1/2 max-sm:w-ful">
                <div className="">
                    <li className="my-2 capitalize text-gray-700 font-bold">Let Us Help You</li>
                    <li className="my-2 capitalize text-gray-700"><Link to="c/61554c63dfd6a37d71449b5c">Your Account</Link></li>
                    <li className="my-2 capitalize text-gray-700"><Link to="c/61554c63dfd6a37d71449b5c">Returns Center</Link></li>
                    <li className="my-2 capitalize text-gray-700"><Link to="c/61554c63dfd6a37d71449b5c">100% Purchase Protection</Link></li>
                    <li className="my-2 capitalize text-gray-700"><Link to="c/61554c63dfd6a37d71449b5c">Help</Link></li>
                </div>
                <li style={{ color: "#F7FFFF", width: "100" }}><Link to="https://sanjay892000.github.io/my-portfolio-web/">Created by Sanjay Kumar Singh</Link></li>
            </ul>
        </div>
    </div>
    <div className="">
        <div className="flex items-center justify-between">
            <span className="">Copyright © 2024 <Link className="" to="/">Prabhat Center</Link>All rights reserved</span>
            <span className="">
                <Link className="" to="/">Privacy policy</Link>
                <Link className="" to="/">Terms & condition</Link>
            </span>
        </div>
    </div>
</footer>
  )
}

export default Footer
