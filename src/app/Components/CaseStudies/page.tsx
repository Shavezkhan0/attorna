"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PageTitle from '../../utils/PageTitle/PageTitle'

const CaseStudiesPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('ALL')

  const caseStudies = [
    {
      id: 1,
      title: "Family Violence",
      category: "ACCIDENTAL",
      image: "/Case-Studies-images/iStock-1047448428-700x450.jpg"
    },
    {
      id: 2,
      title: "Giving Million Air Its Wings",
      category: "FINANCIAL",
      image: "/Case-Studies-images/iStock-1349722626-700x450.jpg"
    },
    {
      id: 3,
      title: "Accident Insurance",
      category: "ACCIDENTAL",
      image: "/Case-Studies-images/iStock-960834904-700x450.jpg"
    },
    {
      id: 4,
      title: "Making Sure It's Closed",
      category: "FINANCIAL",
      image: "/Case-Studies-images/pexels-mart-production-7699526-700x450.jpg"
    },
    {
      id: 5,
      title: "Public Company Fraud",
      category: "FINANCIAL",
      image: "/Case-Studies-images/pexels-cameron-casey-1722183-700x450.jpg"
    },
    {
      id: 6,
      title: "Nighmare on Wall Street",
      category: "VIOLENCE",
      image: "/Case-Studies-images/iStock-471031398-700x450.jpg"
    },
    {
      id: 7,
      title: "Privacy Matter",
      category: "FINANCIAL",
      image: "/Case-Studies-images/shutterstock_504441832-700x450.jpg"
    },
    {
      id: 8,
      title: "MaTix Tax Invation",
      category: "FINANCIAL",
      image: "/Case-Studies-images/iStock-1184334685-700x450.jpg"
    },
    {
      id: 9,
      title: "Failure of Apple Acquisition",
      category: "FINANCIAL",
      image: "/Case-Studies-images/image-from-rawpixel-id-515848-jpeg-700x450.jpg"
    }
  ]

  const categories = ['ALL', 'ACCIDENTAL', 'FINANCIAL', 'VIOLENCE']

  const filteredCaseStudies = activeCategory === 'ALL' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory)

  return (
    <div className='w-full bg-[#f5f0ea]'>
      <PageTitle title="Case Studies" />
      <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20'>
        
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-serif text-[#2d1f13] font-normal mb-4'>
            Portfolio 3 Columns
          </h1>
          <p className='text-[#8a7a6a] text-base'>
            No Excerpt, With Space
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className='flex flex-wrap justify-center gap-6 mb-16'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm md:text-base font-medium uppercase tracking-wider transition-colors duration-300 ${
                activeCategory === category
                  ? 'text-[#2d1f13]'
                  : 'text-[#8a7a6a] hover:text-[#2d1f13]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12'>
          {filteredCaseStudies.map((study) => (
            <Link
              key={study.id}
              href={`/case-studies/${study.id}`}
              className='group'
            >
              {/* Image */}
              <div className='relative h-[300px] md:h-[350px] overflow-hidden mb-6'>
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                />
                {/* Hover Overlay */}
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300'></div>
              </div>

              {/* Title */}
              <h3 className='text-[#2d1f13] text-xl md:text-2xl font-serif font-normal text-center group-hover:text-[#b8956f] transition-colors duration-300'>
                {study.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredCaseStudies.length === 0 && (
          <div className='text-center py-20'>
            <p className='text-[#8a7a6a] text-lg'>
              No case studies found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CaseStudiesPortfolio