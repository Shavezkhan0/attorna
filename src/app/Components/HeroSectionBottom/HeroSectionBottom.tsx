"use client"

import Image from 'next/image';
import { IoArrowForward } from "react-icons/io5";

const HeroSectionBottom = () => {
  const features = [
    {
      icon: "/herosetion_bottom-images/icon01.png",
      title: "WINNING AWARD LAW FIRM",
      description: "Lawyers and attorneys act as both legal advisors and advocates, guiding individuals and businesses through intricate legal processes.",
      link: "LEARN MORE"
    },
    {
      icon: "/herosetion_bottom-images/icon02.png",
      title: "CONFIDENTIAL",
      description: "Your information is held in strict confidence with us. We prioritize safeguarding your sensitive data. Rest assured, your case details remain private.",
      link: "LEARN MORE"
    },
    {
      icon: "/herosetion_bottom-images/icon03.png",
      title: "LEGAL PROTECTION",
      description: "We provide robust legal protection for our clients. Your rights and interests are our top priority. Rest assured for safeguarding your legal rights.",
      link: "LEARN MORE"
    }
  ];

  return (
    <div className='w-full bg-white py-16 md:py-20 px-6 md:px-12 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
        {/* Three Column Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12'>
          {features.map((feature, index) => (
            <div 
              key={index}
              className='flex flex-col items-start group'
            >
              {/* Icon */}
              <div className='mb-6 transition-transform duration-300 group-hover:scale-110'>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className='object-contain'
                />
              </div>

              {/* Title */}
              <h3 className='text-[#2d1f13] text-base md:text-lg font-semibold tracking-wider mb-4 uppercase'>
                {feature.title}
              </h3>

              {/* Description */}
              <p className='text-[#6b5d4f] text-sm md:text-base leading-relaxed mb-6 flex-grow'>
                {feature.description}
              </p>

              {/* Learn More Link */}
              <a 
                href="#" 
                className='inline-flex items-center gap-2 !text-[#b8956f] hover:!text-[#a67f5a] text-xs md:text-sm font-medium tracking-wider uppercase transition-all duration-300 group-hover:gap-3'
              >
                {feature.link}
                <IoArrowForward size={16} className='!text-[#b8956f]' />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroSectionBottom