import React from 'react'

function Footer() {
    return (
        <footer className="bg-slate-800 text-gray-300">

            <div className="max-w-7xl mx-auto px-6 py-14">

                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12 gap-6">

                    <h1 className="text-3xl font-bold">
                        <span className="text-white">PRABHAT</span>
                        <span className="text-red-500">CENTER</span>
                    </h1>


                    <div className="flex gap-4">
                        <a className='w-10 h-10 flex items-center justify-center rounded-full bg-[#4267b2] hover:opacity-80' href="https://www.facebook.com/profile.php?id=100010363560624&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true"><i className="fab fa-facebook-f"></i></a>
                        <a className='w-10 h-10 flex items-center justify-center rounded-full bg-[#1da1f2] hover:opacity-80' href="https://twitter.com/sanjayk21415502"><i className="fab fa-twitter"></i></a>
                        <a className='w-10 h-10 flex items-center justify-center rounded-full bg-[#e1306c] hover:opacity-80' href="https://www.instagram.com/sanjay_singh.15/"><i className="fab fa-instagram"></i></a>
                        <a className='w-10 h-10 flex items-center justify-center rounded-full bg-[#0077b5] hover:opacity-80' href="https://www.linkedin.com/in/sanjay-kumar-singh-844a62222/"><i className="fab fa-linkedin-in"></i></a>
                        <a className='w-10 h-10 flex items-center justify-center rounded-full bg-red-600 hover:opacity-80' href="https://www.youtube.com/channel/UCifxJcmCzfNGOOkxvd0tR0g"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">Mens</a></li>
                            <li><a href="#" className="hover:text-white">Womens</a></li>
                            <li><a href="#" className="hover:text-white">Kids</a></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-white font-semibold mb-4">Get to Know Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Press Releases</a></li>
                            <li><a href="#" className="hover:text-white">Prabhat Center Science</a></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-white font-semibold mb-4">Make Money with Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Sell on Prabhat Center</a></li>
                            <li><a href="#" className="hover:text-white">Protect & Build Your Brand</a></li>
                            <li><a href="#" className="hover:text-white">Global Selling</a></li>
                            <li><a href="#" className="hover:text-white">Advertise Your Product</a></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-white font-semibold mb-4">Let Us Help You</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Your Account</a></li>
                            <li><a href="#" className="hover:text-white">Returns Center</a></li>
                            <li><a href="#" className="hover:text-white">100% Purchase Protection</a></li>
                            <li><a href="#" className="hover:text-white">Help</a></li>
                            <li className="pt-2 text-sm text-gray-400"><a href="https://sanjay892000.netlify.app/">Created by Sanjay Singh</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="bg-black py-4">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm text-gray-400 gap-2">
                    <p>© 2024 Prabhat Center. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
