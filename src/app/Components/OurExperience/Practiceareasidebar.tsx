"use client"

import React from 'react'
import { IoArrowForward } from "react-icons/io5"
import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa"

const PracticeAreaSidebar = () => {
  const practiceAreas = [
    { name: "Corporate & Securities", active: true },
    { name: "E-commerce Law", active: false },
    { name: "Insurance Law", active: false },
    { name: "Tax Law", active: false },
    { name: "Healthcare Law", active: false },
    { name: "Real Estate Law", active: false }
  ]

  return (
    <div className='space-y-8'>
      {/* Practice Areas List */}
      <div className='bg-white rounded-lg p-8 shadow-sm'>
        <h3 className='text-2xl font-serif text-[#2d1f13] font-normal mb-6'>
          Practice Areas
        </h3>
        <ul className='space-y-4'>
          {practiceAreas.map((area, index) => (
            <li key={index}>
              <a 
                href="#"
                className={`flex items-center justify-between text-[#2d1f13] hover:text-[#b8956f] transition-colors py-3 px-4 rounded-md ${
                  area.active ? 'bg-[#f5f0ea] text-[#b8956f] font-medium' : ''
                }`}
              >
                <span className='text-sm md:text-base'>{area.name}</span>
                <IoArrowForward className='text-[#b8956f]' size={16} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info Card */}
      <div className='bg-[#2d1f13] rounded-lg p-8 text-white relative overflow-hidden'>
        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute inset-0' style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className='relative z-10'>
          <h3 className='text-2xl font-serif font-normal mb-6'>
            Contact Info
          </h3>

          <div className='space-y-6'>
            {/* Phone */}
            <div className='flex items-start gap-4'>
              <div className='text-[#b8956f] mt-1 shrink-0'>
                <FaPhone size={18} />
              </div>
              <div>
                <a 
                  href="tel:+12345234554" 
                  className='text-white hover:text-[#b8956f] transition-colors text-base'
                >
                  (1)2345-2345-54
                </a>
              </div>
            </div>

            {/* Email */}
            <div className='flex items-start gap-4'>
              <div className='text-[#b8956f] mt-1 shrink-0'>
                <FaEnvelope size={18} />
              </div>
              <div>
                <a 
                  href="mailto:contact@attornafirm.co" 
                  className='text-white hover:text-[#b8956f] transition-colors text-base break-all'
                >
                  contact@attornafirm.co
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className='flex items-start gap-4'>
              <div className='text-[#b8956f] mt-1 shrink-0'>
                <FaClock size={18} />
              </div>
              <div>
                <p className='text-white text-base'>Mon – Fri 9.00-18.00</p>
              </div>
            </div>
          </div>

          {/* Download PDF Button */}
          <button className='w-full mt-8 bg-[#b8956f] hover:bg-[#a67f5a] text-white uppercase text-sm font-medium tracking-wider px-6 py-4 rounded-md transition-all duration-300 flex items-center justify-center gap-2'>
            <svg 
              className='w-5 h-5' 
              fill='currentColor' 
              viewBox='0 0 20 20'
            >
              <path 
                fillRule='evenodd' 
                d='M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z' 
                clipRule='evenodd'
              />
            </svg>
            DOWNLOAD PDF
          </button>
        </div>
      </div>
    </div>
  )
}

export default PracticeAreaSidebar