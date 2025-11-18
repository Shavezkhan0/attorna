"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaPhone, FaClock, FaDownload } from 'react-icons/fa'
import { IoMailOpenOutline } from 'react-icons/io5'

const practiceAreas = [
  { name: 'Corporate & Securities', slug: 'corporate-securities' },
  { name: 'E-commerce Law', slug: 'e-commerce-law' },
  { name: 'Insurance Law', slug: 'insurance-law' },
  { name: 'Tax Law', slug: 'tax-law' },
  { name: 'Healthcare Law', slug: 'healthcare-law' },
  { name: 'Real Estate Law', slug: 'real-estate-law' },
]

const PracticeAreaContent = ({ 
  currentPage = 'corporate-securities',
  mainImage = '/OurExperience/img01.jpg',
  contactImage = '/OurExperience/img01.jpg'
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Left Side - Main Content */}
        <div className='lg:col-span-2'>
          {/* Featured Image */}
          <div className='relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12'>
            <Image
              src={mainImage}
              alt="Practice Area"
              fill
              className='object-cover'
            />
          </div>

          {/* Main Content */}
          <div className='mb-12'>
            <div className='w-12 h-0.5 bg-[#8b7355] mb-8'></div>
            
            <h2 className='text-3xl md:text-4xl font-serif text-[#2d1f13] font-normal mb-8 leading-tight'>
              Navigating the Complexities of Business Transactions
            </h2>

            <p className='text-[#6b5d4f] text-base leading-relaxed mb-6'>
              In the ever-evolving landscape of business, companies face a myriad of legal challenges. From initial formation and day-to-day operations to mergers, acquisitions, and public offerings, the realm of Corporate & Securities Law plays a vital role in ensuring that businesses can thrive while complying with an intricate web of regulations.
            </p>

            <p className='text-[#6b5d4f] text-base leading-relaxed mb-6'>
              At Attorna, our commitment to excellence is unwavering. We understand that businesses face unique challenges, and our legal solutions are tailored to address your specific needs. We believe in proactive counsel to help you avoid legal pitfalls, and we stand ready to advocate for your interests when disputes arise.
            </p>
          </div>
        </div>

        {/* Right Side - Sidebar */}
        <div className='lg:col-span-1 space-y-6'>
          {/* Practice Areas Navigation */}
          <div className='bg-white'>
            <h3 className='text-2xl md:text-3xl font-serif text-[#2d1f13] mb-6'>
              Practice Areas
            </h3>
            
            <nav className='space-y-0'>
              {practiceAreas.map((area) => {
                const isActive = currentPage === area.slug
                const isHovered = hoveredItem === area.slug
                
                return (
                  <Link
                    key={area.slug}
                    href={`/Components/OurExperience/${area.slug}`}
                    className='block'
                    onMouseEnter={() => setHoveredItem(area.slug)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className={`
                      py-4 border-b border-gray-200 
                      transition-all duration-200 ease-in-out
                      ${isActive ? 'text-[#8b7355]' : 'text-[#2d1f13]'}
                      ${isHovered && !isActive ? 'text-[#8b7355]' : ''}
                    `}>
                      <div className='flex items-center'>
                        <span className={`
                          mr-3 transition-opacity duration-200
                          ${isActive || isHovered ? 'opacity-100' : 'opacity-0'}
                        `}>
                          →
                        </span>
                        
                        <span className={`
                          transition-all duration-200
                          ${!(isActive || isHovered) ? 'ml-7' : ''}
                        `}>
                          {area.name}
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </nav>
            
            <div className='border-b-2 border-gray-900 mt-8 mb-8'></div>
          </div>

          {/* Contact Info Card */}
          <div className='relative rounded-2xl overflow-hidden'>
            {/* Background Image */}
            <div className='absolute inset-0'>
              <Image
                src={contactImage}
                alt="Contact"
                fill
                className='object-cover brightness-50'
              />
            </div>
            
            {/* Content Overlay */}
            <div className='relative z-10 p-8 text-white'>
              <h3 className='text-2xl md:text-3xl font-serif mb-8'>
                Contact Info
              </h3>
              
              <div className='space-y-6'>
                {/* Phone */}
                <div className='flex items-center gap-3'>
                  <FaPhone size={18} className='shrink-0' />
                  <a href='tel:+12345234554' className='hover:text-[#c4a87c] transition-colors'>
                    (1)2345-2345-54
                  </a>
                </div>
                
                {/* Email */}
                <div className='flex items-center gap-3'>
                  <IoMailOpenOutline size={20} className='shrink-0' />
                  <a href='mailto:contact@attornafirm.co' className='hover:text-[#c4a87c] transition-colors break-all'>
                    contact@attornafirm.co
                  </a>
                </div>
                
                {/* Hours */}
                <div className='flex items-center gap-3'>
                  <FaClock size={18} className='shrink-0' />
                  <span>Mon — Fri 9.00-18.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Download PDF Button */}
          <button className='w-full bg-[#a89172] hover:bg-[#8b7355] text-white py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3 font-medium'>
            <FaDownload size={18} />
            DOWNLOAD PDF
          </button>
        </div>
      </div>
    </div>
  )
}

export default PracticeAreaContent