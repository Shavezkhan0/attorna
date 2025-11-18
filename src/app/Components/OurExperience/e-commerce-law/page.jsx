"use client"

import React from 'react'
import FAQSection from '../Faqsection'
import ContactSection from '../../ContactSection/ContactSection'
import PracticeAreaContent from '../Practiceareacontent'
import ProcessSection from '../Processsection'
import PageTitle from '../../../utils/PageTitle/PageTitle'

const EcommerceLaw = () => {
  return (
    <div>
      <PageTitle title="E-Commerce Law" />

      <div className="bg-[#FAF7F2] py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-2">
          E-commerce Law
        </h1>
        <h4 className="text-sm md:text-base text-gray-600 tracking-wider">
          Practice Area
        </h4>
      </div>

      <PracticeAreaContent 
        currentPage="e-commerce-law"
        mainImage="/OurExperience/img06.jpg"
        contactImage="/OurExperience/img06.jpg"
      />
      
      <FAQSection />
      <ProcessSection />
      <ContactSection />
    </div>
  )
}

export default EcommerceLaw

