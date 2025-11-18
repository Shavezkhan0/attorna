"use client"

import React from 'react'
import FAQSection from '../Faqsection'
import ContactSection from '../../ContactSection/ContactSection'
import PracticeAreaContent from '../Practiceareacontent'
import ProcessSection from '../Processsection'
import PageTitle from '../../../utils/PageTitle/PageTitle'

const TaxLaw = () => {
  return (
    <div>
      <PageTitle title="Tax Law" />

      <div className="bg-[#FAF7F2] py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-2">
          Tax Law
        </h1>
        <h4 className="text-sm md:text-base text-gray-600 tracking-wider">
          Practice Area
        </h4>
      </div>

      <PracticeAreaContent 
        currentPage="tax-law"
        mainImage="/OurExperience/img04.jpg"
        contactImage="/OurExperience/img04.jpg"
      />
      
      <FAQSection />
      <ProcessSection />
      <ContactSection />
    </div>
  )
}

export default TaxLaw