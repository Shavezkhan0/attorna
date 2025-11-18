"use client"

import { useState } from 'react'
import { IoArrowForward } from "react-icons/io5"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"

const CaseStudies = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState('next')

  // All case studies (showing 3 at a time in carousel)
  const allCaseStudies = [
    {
      title: "Family Violence",
      category: "Violence",
      image: "/Case-Studies-images/image-from-rawpixel-id-515848-jpeg-700x450.jpg"
    },
    {
      title: "Giving Million Air Its Wings",
      category: "Financial",
      image: "/Case-Studies-images/iStock-471031398-700x450.jpg"
    },
    {
      title: "Accident Insurance",
      category: "Accidental",
      image: "/Case-Studies-images/iStock-960834904-700x450.jpg"
    },
    {
      title: "Making Sure It's Closed",
      category: "Financial",
      image: "/Case-Studies-images/iStock-1047448428-700x450.jpg"
    },
    {
      title: "Public Company Fraud",
      category: "Financial",
      image: "/Case-Studies-images/iStock-1184334685-700x450.jpg"
    },
    {
      title: "Nighmare on Wall Street",
      category: "Violence",
      image: "/Case-Studies-images/iStock-1349722626-700x450.jpg"
    },
    {
      title: "Privacy Matter",
      category: "Financial",
      image: "/Case-Studies-images/pexels-cameron-casey-1722183-700x450.jpg"
    },
    {
      title: "MaTix Tax Invation",
      category: "Accidental",
      image: "/Case-Studies-images/pexels-mart-production-7699526-700x450.jpg"
    },
    {
      title: "Failure of Apple Acquisition",
      category: "Violence",
      image: "/Case-Studies-images/shutterstock_504441832-700x450.jpg"
    }
  ]

  // Calculate total number of slides (groups of 3)
  const totalSlides = Math.ceil(allCaseStudies.length / 3)

  // Get current 3 case studies
  const getCurrentCases = () => {
    const startIndex = currentSlide * 3
    return allCaseStudies.slice(startIndex, startIndex + 3)
  }

  const goToSlide = (index: number) => {
    if (index === currentSlide || isTransitioning) return
    
    // Determine direction
    setDirection(index > currentSlide ? 'next' : 'prev')
    setIsTransitioning(true)
    setCurrentSlide(index)
    
    setTimeout(() => {
      setIsTransitioning(false)
    }, 600)
  }

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1)
    }
  }

  return (
    <div className='w-full bg-white py-20 md:py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden'>
      {/* Background Text "CASES" */}
      <div className='absolute top-12 left-0 right-0 text-center pointer-events-none'>
        <h2 className='text-[12rem] md:text-[15rem] lg:text-[20rem] font-serif text-gray-100 opacity-60 font-normal leading-none tracking-wider'>
          CASES
        </h2>
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Section Header */}
        <div className='flex justify-between items-start mb-16'>
          <div>
            <div className='w-12 h-[2px] bg-[#b8956f] mb-4'></div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-serif text-[#2d1f13] font-normal leading-tight'>
              Case Studies
            </h2>
          </div>

          {/* View All Cases Link */}
          <a href="/Components/CaseStudies" className='hidden md:flex items-center gap-2 text-[#b8956f] hover:text-[#a67f5a] text-sm uppercase tracking-wider font-medium transition-all group mt-8'>
            VIEW ALL CASES
            <IoArrowForward className='group-hover:translate-x-1 transition-transform' size={16} />
          </a>
        </div>

        {/* Case Studies Grid with Left-Right Transition */}
        <div className='relative mb-12 min-h-[350px] overflow-hidden'>
          <div 
            key={currentSlide}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${direction === 'next' ? 'slide-left' : 'slide-right'}`}
          >
            {getCurrentCases().map((caseStudy, index) => (
              <div key={`${currentSlide}-${index}`} className='group cursor-pointer'>
                {/* Image Container */}
                <div className='relative overflow-hidden rounded-lg mb-6 aspect-[4/3] bg-gray-200'>
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>

                {/* Title */}
                <h3 className='text-[#2d1f13] text-xl md:text-2xl font-normal mb-3 leading-snug group-hover:text-[#b8956f] transition-colors'>
                  {caseStudy.title}
                </h3>

                {/* Category */}
                <p className='text-[#b8956f] text-sm uppercase tracking-wider font-medium'>
                  {caseStudy.category}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className='flex justify-center gap-4 '>
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0 || isTransitioning}
            className='w-12 h-12 flex items-center justify-center rounded-md bg-gray-200 text-[#b8956f] hover:bg-[#b8956f] hover:text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#b8956f] shadow-sm'
            aria-label="Previous slide"
          >
            <IoChevronBack size={20} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1 || isTransitioning}
            className='w-12 h-12 flex items-center justify-center rounded-md bg-gray-200 text-[#b8956f] hover:bg-[#b8956f] hover:text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#b8956f] shadow-sm'
            aria-label="Next slide"
          >
            <IoChevronForward size={20} />
          </button>
        </div>

        {/* Mobile View All Cases Link */}
        <div className='flex md:hidden justify-center mt-12'>
          <a href="#" className='inline-flex items-center gap-2 text-[#b8956f] hover:text-[#a67f5a] text-sm uppercase tracking-wider font-medium transition-all group'>
            VIEW ALL CASES
            <IoArrowForward className='group-hover:translate-x-1 transition-transform' size={16} />
          </a>
        </div>
      </div>

      {/* Left-Right Slide Transition Styles */}
      <style jsx>{`
        @keyframes slideFromRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .slide-left {
          animation: slideFromRight 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide-right {
          animation: slideFromLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  )
}

export default CaseStudies