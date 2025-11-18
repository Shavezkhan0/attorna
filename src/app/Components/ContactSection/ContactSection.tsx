"use client"

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa"

const ContactSection = () => {
  return (
    <div className='w-full bg-[#f5f0ea] py-20 px-6 md:px-12 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Left Side - Contact Information */}
          <div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-serif text-[#422306] font-normal mb-6 leading-tight'>
              Free Consultation
            </h2>
            <p className='text-[#6b5d4f] text-base mb-12 leading-relaxed'>
              Law is a complex matter that can lead to significant problems if disregarded. Allow us to assist you!
            </p>
            
            <div className='space-y-6'>
              {/* Phone */}
              <div className='flex items-start gap-4'>
                <div className='text-[#ac906c] mt-1'>
                  <FaPhone size={18} />
                </div>
                <div>
                  <a href='tel:+12345234554' className='text-[#422306] text-base hover:text-[#ac906c] transition-colors'>
                    (1)2345-2345-54
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className='flex items-start gap-4'>
                <div className='text-[#ac906c] mt-1'>
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <a href='mailto:contact@attornafirm.co' className='text-[#422306] text-base hover:text-[#ac906c] transition-colors'>
                    contact@attornafirm.co
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className='flex items-start gap-4'>
                <div className='text-[#ac906c] mt-1'>
                  <FaClock size={18} />
                </div>
                <div>
                  <p className='text-[#422306] text-base'>Mon - Fri 9.00-18.00</p>
                </div>
              </div>

              {/* Address */}
              <div className='flex items-start gap-4'>
                <div className='text-[#ac906c] mt-1'>
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <p className='text-[#422306] text-base'>12th Wall Street NY CV564 Unites States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <input
                  type='text'
                  placeholder='First name*'
                  className='w-full px-6 py-4 bg-white border border-[#e8e0d8] rounded-md focus:outline-none focus:border-[#ac906c] transition-colors text-[#422306] placeholder:text-[#8a7a6a]'
                />
                <input
                  type='text'
                  placeholder='Last name*'
                  className='w-full px-6 py-4 bg-white border border-[#e8e0d8] rounded-md focus:outline-none focus:border-[#ac906c] transition-colors text-[#422306] placeholder:text-[#8a7a6a]'
                />
              </div>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <input
                  type='email'
                  placeholder='Email*'
                  className='w-full px-6 py-4 bg-white border border-[#e8e0d8] rounded-md focus:outline-none focus:border-[#ac906c] transition-colors text-[#422306] placeholder:text-[#8a7a6a]'
                />
                <input
                  type='tel'
                  placeholder='Phone*'
                  className='w-full px-6 py-4 bg-white border border-[#e8e0d8] rounded-md focus:outline-none focus:border-[#ac906c] transition-colors text-[#422306] placeholder:text-[#8a7a6a]'
                />
              </div>

              <select
                className='w-full px-6 py-4 bg-white border border-[#e8e0d8] rounded-md focus:outline-none focus:border-[#ac906c] transition-colors text-[#422306]'
              >
                <option value='corporate'>Corporate Law</option>
                <option value='criminal'>Criminal Defense</option>
                <option value='realestate'>Real Estate Law</option>
                <option value='insurance'>Insurance Law</option>
                <option value='family'>Family Law</option>
                <option value='tax'>Tax Law</option>
              </select>

              <textarea
                placeholder='Message*'
                rows={6}
                className='w-full px-6 py-4 bg-white border border-[#e8e0d8] rounded-md focus:outline-none focus:border-[#ac906c] transition-colors resize-none text-[#422306] placeholder:text-[#8a7a6a]'
              ></textarea>

              <button 
                type='submit'
                className='w-full bg-[#ac906c] hover:bg-[#9b7938] text-white uppercase text-sm font-semibold px-8 py-4 rounded-md transition-all shadow-md'
              >
                SUBMIT NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection