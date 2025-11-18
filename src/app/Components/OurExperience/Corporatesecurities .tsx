"use client"

import React from 'react'
import Navbar from '../../Navbar/pages'
import Footer from '../../Footer/Footer'
import ContactSection from '../../ContactSection/ContactSection'
import PracticeAreaHero from './components/PracticeAreaHero'
import PracticeAreaContent from './components/PracticeAreaContent'
import PracticeAreaSidebar from './components/PracticeAreaSidebar'
import FAQSection from './components/FAQSection'
import ProcessSection from './components/ProcessSection'

const CorporateSecurities = () => {
  return (
    <div className='w-full bg-[#f5f0ea]'>
      <Navbar />
      
      {/* Hero Section */}
      <PracticeAreaHero 
        title="Corporate & Securities"
        subtitle="Practice Area"
      />

      {/* Main Content Area */}
      <div className='w-full py-16 md:py-20 px-6 md:px-12 lg:px-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            {/* Left Content - 8 columns */}
            <div className='lg:col-span-8'>
              <PracticeAreaContent />
              <FAQSection />
              <ProcessSection />
            </div>

            {/* Right Sidebar - 4 columns */}
            <div className='lg:col-span-4'>
              <PracticeAreaSidebar />
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
      <Footer />
    </div>
  )
}

export default CorporateSecurities