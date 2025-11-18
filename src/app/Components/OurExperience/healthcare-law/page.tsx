"use client"

import React from 'react'
import FAQSection from '../Faqsection'
import ContactSection from '../../ContactSection/ContactSection'
import PracticeAreaContent from '../Practiceareacontent'
import ProcessSection from '../Processsection'
import PageTitle from '../../../utils/PageTitle/PageTitle'

const HealthcareLaw = () => {
  return (
    <div>
      <PageTitle title="Healthcare Law" />

      <div className="bg-[#FAF7F2] py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-2">
        HEALTHCARE LAW
        </h1>
        <h4 className="text-sm md:text-base text-gray-600 tracking-wider">
          Practice Area
        </h4>
      </div>

      <PracticeAreaContent 
        currentPage="healthcare-law"
        mainImage="/OurExperience/img03.jpg"
        contactImage="/OurExperience/img03.jpg"
      />
      
      <FAQSection />
      <ProcessSection />
      <ContactSection />
    </div>
  )
}

export default HealthcareLaw