"use client"

import { FaBalanceScale, FaBriefcase, FaHome, FaShieldAlt, FaHandshake, FaUserTie } from "react-icons/fa"

const PracticeAreasSection = () => {
  const practiceAreas = [
    {
      icon: FaBriefcase,
      title: "Corporate & Securities",
      description: "Comprehensive legal solutions for businesses, mergers, acquisitions, and corporate governance."
    },
    {
      icon: FaBalanceScale,
      title: "Criminal Defense",
      description: "Aggressive representation for criminal charges with a proven track record of success."
    },
    {
      icon: FaHome,
      title: "Real Estate Law",
      description: "Expert guidance on property transactions, disputes, and real estate development."
    },
    {
      icon: FaShieldAlt,
      title: "Insurance Law",
      description: "Protecting your rights in insurance disputes and claims negotiations."
    },
    {
      icon: FaHandshake,
      title: "Family Law",
      description: "Compassionate support for divorce, custody, and family-related legal matters."
    },
    {
      icon: FaUserTie,
      title: "Tax Law",
      description: "Strategic tax planning and representation in tax disputes and audits."
    }
  ]

  return (
    <div className='w-full bg-[#fcf7f1] py-20 px-6 md:px-12 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <span className='text-[#ac906c] uppercase text-sm font-semibold tracking-wider'>Our Services</span>
          <h2 className='text-4xl md:text-5xl font-serif text-[#422306] font-bold mt-4 mb-6'>
            Practice Areas
          </h2>
          <p className='text-[#422306] text-lg max-w-3xl mx-auto opacity-80'>
            We offer comprehensive legal services across multiple practice areas, 
            providing expert counsel and representation for individuals and businesses.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {practiceAreas.map((area, index) => (
            <div 
              key={index}
              className='bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer'
            >
              {/* Icon */}
              <div className='mb-6'>
                <div className='w-16 h-16 bg-gradient-to-br from-[#ac906c] to-[#9b7938] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <area.icon className='text-white text-2xl' />
                </div>
              </div>

              {/* Title */}
              <h3 className='text-[#422306] text-xl font-bold mb-4 group-hover:text-[#ac906c] transition-colors'>
                {area.title}
              </h3>

              {/* Description */}
              <p className='text-[#422306] opacity-70 leading-relaxed mb-6'>
                {area.description}
              </p>

              {/* Learn More Link */}
              <a 
                href="#" 
                className='!text-[#ac906c] font-semibold text-sm uppercase tracking-wider hover:!text-[#9b7938] transition-colors inline-flex items-center gap-2'
              >
                Learn More
                <span className='group-hover:translate-x-1 transition-transform !text-[#ac906c]'>→</span>
              </a>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className='text-center mt-12'>
          <button className='bg-gradient-to-r from-[#ac906c] to-[#9b7938] hover:from-[#9b7938] hover:to-[#8a6a4a] text-white uppercase text-sm font-semibold px-8 py-4 rounded-md transition-all shadow-md'>
            View All Practice Areas
          </button>
        </div>
      </div>
    </div>
  )
}

export default PracticeAreasSection