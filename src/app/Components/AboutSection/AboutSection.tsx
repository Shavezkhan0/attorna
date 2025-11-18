"use client"

import Image from 'next/image'

const AboutSection = () => {
  return (
    <div className='w-full bg-[#f5f0ea] py-20 md:py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden'>
      {/* Background Text "ATTORNA" */}
      <div className='absolute top-12 left-0 right-0 text-center pointer-events-none'>
        <h2 className='text-[12rem] md:text-[15rem] lg:text-[20rem] font-serif text-[#e8dfd5] opacity-20 font-normal leading-none tracking-wider'>
          ATTORNA
        </h2>
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Left Side - Content */}
          <div>
            <div className='mb-6'>
              <div className='w-12 h-[2px] bg-[#b8956f] mb-4'></div>
              <span className='text-[#8a7a6a] uppercase text-xs font-light tracking-widest'>OUR EXPERTISE</span>
            </div>
            
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-serif text-[#2d1f13] font-normal mb-8 leading-tight'>
              Story About Attorna
            </h2>
            
            <p className='text-[#6b5d4f] text-base mb-6 leading-relaxed'>
              At Attorna, we understand that navigating the intricate landscape of legal challenges can be daunting. Our seasoned team of dedicated legal professionals is here to guide you through your legal journey with expertise and empathy.
            </p>
            
            <p className='text-[#6b5d4f] text-base mb-10 leading-relaxed'>
              Founded on principles of integrity, diligence, and client-centricity, Attorna prides itself on delivering tailored legal solutions that prioritize your unique circumstances.
            </p>

            {/* CTA Button */}
            <a href='/Components/ContactSection/contact'>

            <button className='bg-[#b8956f] hover:bg-[#a67f5a] hover:cursor-pointer text-white uppercase text-sm font-medium tracking-wider px-8 py-4 transition-all duration-300'>
              CONTACT US
            </button>
            </a>
          </div>

          {/* Right Side - Combined Image */}
          <div className='relative'>
            {/* Single Combined Image with courthouse and books */}
            <div className='relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl'>
              <Image
                src="/about/law-img.png"
                alt="Law Court Building with Books"
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection