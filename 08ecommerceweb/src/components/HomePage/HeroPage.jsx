import React from 'react'
import hand_img from '../../assets/hand_icon.png'
import home_img from '../../productimage/hero_image.png'
function HeroPage() {
  return (
    <div>
      <main className="flex w-screen">
        <div className="">
          <div className="">
            <h3>New Arrivals Only</h3>
            <div className="">
              <h1>new</h1>
              <img src={hand_img} alt="" />
            </div>
            <h1>collection</h1>
            <h1>for everyone</h1>
            <button className="">
              <span>Latest Collection</span>
              <span className="">arrow_right_alt</span>
            </button>
          </div>
        </div>
        <div className="">
          <img src={home_img} alt="Loadding..." />
        </div>
      </main>
    </div>
  )
}

export default HeroPage
