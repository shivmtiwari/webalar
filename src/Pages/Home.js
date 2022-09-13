import React from 'react'
import Footer from '../Components/footer/Footer'
import Hero from '../Components/Hero/Hero'
import Navbar from '../Components/Navbar/Navbar'
import OurWorks from '../Components/OurWorks/OurWorks'
import TrustedCompanies from '../Components/trusted-comapnies/TrustedCompanies'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <TrustedCompanies/>
    <OurWorks/>
    <Footer/>
    </>
  )
}

export default Home