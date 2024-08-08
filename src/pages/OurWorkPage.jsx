import React from 'react'
import OurWork from '../components/Ourwork/OurWork'
import Navbar from '../components/Navbar/Navbar'
import Price from '../components/Price/Price'
import Footer from '../components/Footer/Footer'
import Scroll from '../components/Scroll/Scroll'

const OurWorkPage = () => {
  return (
    <div>
      <Navbar/>
      <OurWork/>
      <Price/>
      <Footer/>
      <Scroll/>
    </div>
  )
}

export default OurWorkPage
