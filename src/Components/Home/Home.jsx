import React from 'react'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import CategorySlider from '../CategorySlider/CategorySlider'
import MainSlider from '../MainSlider/MainSlider'
import { Helmet } from 'react-helmet'
import Footer from '../Footer/Footer'

export default function Home() {
  return <>
  <Helmet>
<meta name='description' content=''/>
<title>Fresh Cart</title>

  </Helmet>
  <MainSlider/>
  <CategorySlider/>
  
  </>
}
