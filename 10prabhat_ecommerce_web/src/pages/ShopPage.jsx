import React from 'react'
import HeroSection from '../components/HeroSection'
import PopularWomens from '../components/PopularWomens'
import ExclusiveOffer from '../components/ExclusiveOffer '
import NewCollection from '../components/NewCollection'
import NewsletterAndSignIn from '../components/NewsletterAndSignIn'

function ShopPage() {
  return (
    <>
      <HeroSection/>
      <PopularWomens/>
      <ExclusiveOffer/>
      <NewCollection/>
      <NewsletterAndSignIn/>
    </>
  )
}

export default ShopPage
