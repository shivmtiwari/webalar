import React from 'react'
import './style.css'
import Services from './Services'
import CompaniesCarousel from './CompaniesCarousel'

const TrustedCompanies = () => {
  return (
    <div className="CompanyWrapper">
      <div className='wrapper'><h2 className='title'>trusted companies</h2></div>
      <hr />
      <CompaniesCarousel />
      <Services />
    </div>

  )
}

export default TrustedCompanies