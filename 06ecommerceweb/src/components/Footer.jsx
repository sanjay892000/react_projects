import { Link } from "react-router-dom"

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
        <div className="flex justify-between items-center">
            <ul className="">
                <li className="">Company</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/mens">Mens</Link></li>
                <li><Link to="/womens">Womens</Link></li>
                <li><Link to="/kids">Kids</Link></li>
            </ul>
            <ul className="">
                <li className="link_name">Get to Know Us</li>
                <li><Link to="/c/61554bfe801949ad7b9be4ff">About Us</Link></li>
                <li><Link to="/c/61554bfe801949ad7b9be4ff">Careers</Link></li>
                <li><Link to="/c/61554bfe801949ad7b9be4ff">Press Releases</Link></li>
                <li><Link to="/c/61554bfe801949ad7b9be4ff">Prabhat Center Science</Link></li>
            </ul>
            <ul className="">
                <li className="">Make Money with Us</li>
                <li><Link to="/c/61554bfe801949ad7b9be4ff">Sell on Prabhat Center</Link></li>
                <li><Link to="/c/61554c2753bcf306407cb1bd">Protect & build your brand</Link></li>
                <li><Link to="/c/61554c43d2a6b15f764aff36">Prabhat Global Selling</Link></li>
                <li><Link to="c/61554c63dfd6a37d71449b5c">Advertise Your Product</Link></li>
            </ul>
            <ul className="">
                <div className="">
                    <li className="">Let Us Help You</li>
                    <li><Link to="c/61554c63dfd6a37d71449b5c">Your Account</Link></li>
                    <li><Link to="c/61554c63dfd6a37d71449b5c">Returns Center</Link></li>
                    <li><Link to="c/61554c63dfd6a37d71449b5c">100% Purchase Protection</Link></li>
                    <li><Link to="c/61554c63dfd6a37d71449b5c">Help</Link></li>
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