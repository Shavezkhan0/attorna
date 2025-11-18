"use client"

import Image from 'next/image';
import { IoArrowForward } from "react-icons/io5";

const OurExperience = () => {
  const practiceAreas = [
    {
      image: "/OurExperience/img01.jpg",
      title: "COPORATE & SECURITIES",
      link: "LEARN MORE",
      go_to:"Components/OurExperience/corporate-securities"
    },
    {
      image: "/OurExperience/img02.jpg",
      title: "REAL ESTATE LAW",
      link: "LEARN MORE",
      go_to:"Components/OurExperience/real-estate-law"
    },
    {
      image: "/OurExperience/img03.jpg",
      title: "HEALTHCARE LAW",
      link: "LEARN MORE",
      go_to:"Components/OurExperience/healthcare-law"
    },
    {
      image: "/OurExperience/img04.jpg",
      title: "TAX LAW",
      link: "LEARN MORE",
      go_to:"Components/OurExperience/tax-law"
    },
    {
      image: "/OurExperience/img05.jpg",
      title: "INSURANCE LAW",
      link: "LEARN MORE",
      go_to:"Components/OurExperience/insurance-law"
    },
    {
      image: "/OurExperience/img06.jpg",
      title: "E-COMMERCE LAW",
      link: "LEARN MORE",
      go_to:"Components/OurExperience/e-commerce-law"
    }
  ];

  return (
    <div className='w-full bg-[#f5f0ea] py-20 md:py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden'>
      {/* Background Text "PRACTICE" */}
      <div className='absolute top-12 left-0 right-0 text-center pointer-events-none'>
        <h2 className='text-[12rem] md:text-[15rem] lg:text-[18rem] font-serif text-[#e8dfd5] opacity-40 font-bold leading-none tracking-wider'>
          PRACTICE
        </h2>
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Section Header */}
        <div className='mb-16'>
          {/* Small Title */}
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-12 h-[2px] bg-[#b8956f]'></div>
            <p className='text-[#b8956f] text-sm md:text-base uppercase tracking-widest font-light'>
              OUR EXPERTISE
            </p>
          </div>
          
          {/* Main Title */}
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-serif text-[#2d1f13] font-normal leading-tight'>
            Legal Practice Areas
          </h2>
        </div>

        {/* Practice Areas Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {practiceAreas.map((area, index) => (
            <div 
              key={index}
              className='group cursor-pointer'
            >
              {/* Image Container */}
              <div className='relative h-[200px] md:h-[250px] mb-6 overflow-hidden rounded-lg'>
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                />
                {/* Overlay on hover */}
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300'></div>
              </div>

              {/* Title */}
              <h3 className='text-[#2d1f13] text-lg md:text-xl font-semibold tracking-wide mb-4 uppercase group-hover:text-[#b8956f] transition-colors duration-300'>
                {area.title}
              </h3>

              {/* Learn More Link */}
              <a 
                href={area.go_to}
                className='inline-flex items-center gap-2 !text-[#b8956f] hover:!text-[#a67f5a] text-sm font-medium tracking-wider uppercase transition-all duration-300 group-hover:gap-3'
              >
                {area.link}
                <IoArrowForward size={16} className='!text-[#b8956f]' />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurExperience