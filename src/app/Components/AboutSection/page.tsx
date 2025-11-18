"use client"

import React from 'react'
import Image from 'next/image'
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaXTwitter, FaInstagram } from 'react-icons/fa6'
import FAQSection from '../OurExperience/Faqsection'
import StatsSection from '../StatsSection/StatsSection'
import HeroSectionBottom from '../HeroSectionBottom/HeroSectionBottom'
import ContactSection from '../ContactSection/ContactSection'
import PageTitle from '../../utils/PageTitle/PageTitle'


const AboutUs = () => {
    return (
        <div className='w-full bg-[#f5f0ea]'>
            <PageTitle title="About Us" />

            {/* Hero Section */}
            <section className="bg-[#f5f0ea] py-20 md:py-28 px-6 text-center">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal mb-6 text-[#2d1f13] leading-tight">
                        About Attorna
                    </h1>
                    <p className="text-lg md:text-xl text-[#8a7a6a] font-light">
                        Our Story
                    </p>
                </div>
            </section>

            {/* Story About Attorna Section */}
            <section className='w-full bg-[#f5f0ea] py-16 md:py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden'>
                {/* Background Text "ATTORNA" */}
                <div className='absolute top-0 left-0 right-0 text-left pointer-events-none'>
                    <h2 className='text-[8rem] md:text-[12rem] lg:text-[15rem] font-serif text-[#e8dfd5] opacity-30 font-normal leading-none tracking-wider ml-[-20px]'>
                        ATTORNA
                    </h2>
                </div>

                <div className='max-w-7xl mx-auto relative z-10'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>

                        {/* Left Content */}
                        <div>
                            {/* Small Title */}
                            <div className='flex items-center gap-3 mb-6'>
                                <div className='w-12 h-[2px] bg-[#b8956f]'></div>
                                <p className='text-[#8a7a6a] text-sm md:text-base uppercase tracking-widest font-light'>
                                    OUR EXPERTISE
                                </p>
                            </div>

                            {/* Main Title */}
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif text-[#2d1f13] font-normal mb-8 leading-tight'>
                                Story About Attorna
                            </h2>

                            {/* Description Paragraphs */}
                            <div className='space-y-6 mb-8'>
                                <p className='text-[#6b5d4f] text-base md:text-lg leading-relaxed'>
                                    At Attorna, we understand that navigating the intricate landscape of legal challenges can be daunting. Our seasoned team of dedicated legal professionals is here to guide you through your legal journey with expertise and empathy.
                                </p>
                                <p className='text-[#6b5d4f] text-base md:text-lg leading-relaxed'>
                                    Founded on principles of integrity, diligence, and client-centricity, Attorna prides itself on delivering tailored legal solutions that prioritize your unique circumstances.
                                </p>
                            </div>

                            {/* Contact Us Button */}
                            <button className='bg-[#b8956f] hover:bg-[#a67f5a] text-white uppercase text-sm font-semibold tracking-wider px-10 py-4 transition-all duration-300'>
                                CONTACT US
                            </button>
                        </div>

                        {/* Right Images */}
                        <div className='relative'>
                            {/* Main Large Image */}
                            <div className='relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden'>
                                <Image
                                    src="/about/img1-about.png"
                                    alt="Attorney in office"
                                    fill
                                    className='object-cover'
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection />

            {/* Stats Section */}
            <StatsSection />

            {/* Hero Section Bottom - 3 Features */}
            <HeroSectionBottom />

            <ContactSection />
        </div>
    )
}

export default AboutUs