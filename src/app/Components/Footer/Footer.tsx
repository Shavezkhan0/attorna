"use client"

import Image from 'next/image'
import { FaFacebook, FaLinkedin, FaPinterest, FaXTwitter, FaInstagram } from "react-icons/fa6"
import { FaPaperPlane,FaPhoneAlt } from "react-icons/fa";
import { IoMailOpenOutline,IoPinSharp } from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";
const Footer = () => {
  return (
    <footer className='w-full bg-[#2d2d2d] text-white'>
      {/* Main Footer Content */}
      <div className='px-6 md:px-12 lg:px-20 py-16 md:py-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20'>
            
            {/* Column 1 - Logo */}
            <div>
              <div className='mb-6'>
                <Image 
                  src="/logo-footer-demo-7.png" 
                  alt="ATTORNA logo" 
                  width={100} 
                  height={100} 
                  className='object-contain opacity-70'
                />
              </div>
            </div>

            {/* Column 2 - Contact Info */}
            <div>
              <h3 className='text-xl font-light mb-8 text-white'>Contact Info</h3>
              <div className='space-y-5'>
                <div className='flex items-center gap-3'>
                  <div className='text-[#c4a574] shrink-0 text-base'><FaPhoneAlt /></div>
                  <a href="tel:+12345234554" className='text-white/60 hover:text-[#c4a574] transition-colors text-sm'>
                    (1)2345-2345-54
                  </a>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='text-[#c4a574] shrink-0 text-base'><IoMailOpenOutline/></div>
                  <a href="mailto:contact@attornafirm.co" className='text-white/60 hover:text-[#c4a574] transition-colors text-sm'>
                    contact@attornafirm.co
                  </a>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='text-[#c4a574] shrink-0 text-base mt-0.5'><MdOutlineTimer /></div>
                  <div className='text-white/60 text-sm'>
                    <p>Mon — Fri 9.00-18.00</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='text-[#c4a574] shrink-0 text-base mt-0.5'><IoPinSharp/></div>
                  <div className='text-white/60 text-sm'>
                    <p>12th Wall Street NY CV564</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 - Useful Links */}
            <div>
              <h3 className='text-xl font-light mb-8 text-white'>Useful Links</h3>
              <ul className='space-y-4'>
                <li>
                  <a href="#" className='text-[#c4a574]  transition-colors text-sm'>
                    Practice Areas
                  </a>
                </li>
                <li>
                  <a href="#" className='text-[#c4a574]  transition-colors text-sm'>
                    Privacy & Policy
                  </a>
                </li>
                <li>
                  <a href="#" className='text-[#c4a574] transition-colors text-sm'>
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className='text-[#c4a574]  transition-colors text-sm'>
                    Be Our Partner
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Newsletter */}
            <div>
              <h3 className='text-xl font-light mb-8 text-white'>Newsletter</h3>
              <p className='text-white/60 mb-6 text-sm leading-relaxed'>
                Subscribe to our newsletter
              </p>
              
              {/* Newsletter Input */}
              <div className='relative'>
                <input
                  type='email'
                  placeholder='Enter Your Email Address'
                  className='w-full px-5 py-3.5 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c4a574] text-sm placeholder:text-gray-400'
                />
                <button className='absolute right-4 top-1/2 -translate-y-1/2 text-[#c4a574] hover:text-[#a67f5a] transition-colors'>
                  <span className='text-lg'><FaPaperPlane /></span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className='bg-[#1f1f1f] border-t border-white/5'>
        <div className='px-6 md:px-12 lg:px-20 py-6'>
          <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6'>
            
            {/* Social Media Icons - Left side with N logo */}
            <div className='flex items-center gap-5 order-2 md:order-1'>
              <a href="#" className='text-white/40 hover:text-[#c4a574] transition-colors'>
                <FaFacebook size={16} />
              </a>
              <a href="#" className='text-white/40 hover:text-[#c4a574] transition-colors'>
                <FaLinkedin size={16} />
              </a>
              <a href="#" className='text-white/40 hover:text-[#c4a574] transition-colors'>
                <FaPinterest size={16} />
              </a>
              <a href="#" className='text-white/40 hover:text-[#c4a574] transition-colors'>
                <FaXTwitter size={16} />
              </a>
              <a href="#" className='text-white/40 hover:text-[#c4a574] transition-colors'>
                <FaInstagram size={16} />
              </a>
            </div>

            {/* Copyright */}
            <p className='text-white/40 text-sm order-1 md:order-2'>
              Copyright © 2025 Attorna, All Right Reserved
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer