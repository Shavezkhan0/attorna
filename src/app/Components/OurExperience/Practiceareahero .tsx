"use client"

import React from 'react'

interface PracticeAreaHeroProps {
  title: string
  subtitle: string
}

const PracticeAreaHero = ({ title, subtitle }: PracticeAreaHeroProps) => {
  return (
    <div className='w-full bg-[#f5f0ea] py-20 md:py-28 px-6 md:px-12 lg:px-20 text-center'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-serif text-[#2d1f13] font-normal mb-4 leading-tight'>
          {title}
        </h1>
        <p className='text-[#8a7a6a] text-base md:text-lg font-light tracking-wide'>
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export default PracticeAreaHero