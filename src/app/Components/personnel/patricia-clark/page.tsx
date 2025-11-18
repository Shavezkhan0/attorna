"use client"

import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter, FaInstagram } from 'react-icons/fa'
import { IoMdDownload } from 'react-icons/io'
import PageTitle from '../../../utils/PageTitle/PageTitle'

const AttorneyProfile = () => {
    return (
        <>
            <PageTitle title="Patricia Clark - Single Attorney" />
            
            {/* Main Content */}
            <div className='bg-[#f9f4ef] py-16 px-6 md:px-8 lg:px-12'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                        
                        {/* Left Sidebar - Attorney Info */}
                        <div className='lg:col-span-1'>
                            <div className='bg-white rounded-lg overflow-hidden shadow-sm'>
                                {/* Attorney Image */}
                                <div className='w-full'>
                                    <img 
                                        src="/OutTeam/slider-item-1.jpg" 
                                        alt="Patricia Clark" 
                                        className='w-full h-auto object-cover'
                                    />
                                </div>
                                
                                {/* Attorney Details */}
                                <div className='p-8'>
                                    <h1 className='text-3xl font-serif text-[#2d1f13] mb-2'>Patricia Clark</h1>
                                    <p className='text-[#8b7355] text-sm mb-8'>Partner</p>
                                    
                                    {/* Contact Info */}
                                    <div className='space-y-4 mb-8'>
                                        <div>
                                            <h3 className='text-[#2d1f13] font-semibold text-sm mb-1'>Email</h3>
                                            <a href="mailto:Contact@Attornasite.co" className='text-[#8b7355] text-sm hover:text-[#b8956f] transition-colors'>
                                                Contact@Attornasite.co
                                            </a>
                                        </div>
                                        
                                        <div>
                                            <h3 className='text-[#2d1f13] font-semibold text-sm mb-1'>Phone</h3>
                                            <a href="tel:+12454234522" className='text-[#8b7355] text-sm hover:text-[#b8956f] transition-colors'>
                                                +1-2454-2345-22
                                            </a>
                                        </div>
                                    </div>
                                    
                                    {/* Social Icons */}
                                    <div className='flex items-center gap-4 mb-8'>
                                        <a href="#" className='text-[#b8956f] hover:text-[#8b7355] transition-colors'>
                                            <FaFacebookF size={16} />
                                        </a>
                                        <a href="#" className='text-[#b8956f] hover:text-[#8b7355] transition-colors'>
                                            <FaLinkedinIn size={16} />
                                        </a>
                                        <a href="#" className='text-[#b8956f] hover:text-[#8b7355] transition-colors'>
                                            <FaPinterestP size={16} />
                                        </a>
                                        <a href="#" className='text-[#b8956f] hover:text-[#8b7355] transition-colors'>
                                            <FaTwitter size={16} />
                                        </a>
                                        <a href="#" className='text-[#b8956f] hover:text-[#8b7355] transition-colors'>
                                            <FaInstagram size={16} />
                                        </a>
                                    </div>
                                    
                                    {/* Download vCard Button */}
                                    <button className='flex items-center gap-2 text-[#b8956f] hover:text-[#8b7355] text-sm font-medium uppercase tracking-wide transition-colors'>
                                        <span>DOWNLOAD VCARD</span>
                                        <IoMdDownload size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Content - Biography, Education, etc. */}
                        <div className='lg:col-span-2 space-y-12'>
                            
                            {/* Biography Section */}
                            <section>
                                <h2 className='text-3xl font-serif text-[#2d1f13] mb-6'>Biography</h2>
                                <div className='space-y-4 text-[#6b5d4f] leading-relaxed'>
                                    <p>
                                        John Smith is a Partner at Attorna and the Head of International Arbitration Practice. John specialises in consulting clients in the area of international trade, and representing their interests in international commercial arbitrations of GAFTA.
                                    </p>
                                    <p>
                                        John is the leader of the Working Group on International Taxation & EU Harmonization in UK at the American Chamber of Commerce. He is also the Committee Head of the Permanent Scientific Committee of IFA. During 2011 John served as the Co-Chair of the Tax Committee of the American Chamber of Commerce and was the member of the working group on VAT reform at the Ministry of Finance of United Kingdom.
                                    </p>
                                </div>
                            </section>
                            
                            {/* Practice Areas Section */}
                            <section>
                                <h2 className='text-3xl font-serif text-[#2d1f13] mb-6'>Pratice Areas</h2>
                                <div className='space-y-3'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-2 h-2 rounded-full bg-[#b8956f]'></div>
                                        <span className='text-[#8b7355]'>Estate Planning</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-2 h-2 rounded-full bg-[#b8956f]'></div>
                                        <span className='text-[#8b7355]'>Business and Corporate Law</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-2 h-2 rounded-full bg-[#b8956f]'></div>
                                        <span className='text-[#8b7355]'>Contract Law</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-2 h-2 rounded-full bg-[#b8956f]'></div>
                                        <span className='text-[#8b7355]'>Real Estate Law</span>
                                    </div>
                                </div>
                            </section>
                            
                            {/* Education & Bar Admission Section */}
                            <section>
                                <h2 className='text-3xl font-serif text-[#2d1f13] mb-6'>Education & Bar Admission</h2>
                                <div className='space-y-4 text-[#6b5d4f]'>
                                    <p>BA, Columbia College; 2001</p>
                                    <p>Master of Law, 2007. UK University</p>
                                    <p>Admitted to the Bar since 2013</p>
                                    <p>Member of the International Bar Association</p>
                                    <p>Member of the London City Bar Association</p>
                                    <p>Speaker of GAFTA Professional Development Programmes</p>
                                </div>
                            </section>
                            
                            {/* Practice Areas Awards Section */}
                            <section>
                                <h2 className='text-3xl font-serif text-[#2d1f13] mb-6'>Pratice Areas</h2>
                                <div className='space-y-6'>
                                    <div>
                                        <p className='text-[#6b5d4f] mb-2'>Leading lawyer in London for Dispute Resolution</p>
                                        <h3 className='text-[#2d1f13] font-semibold mb-1'>The Legal500 (2015 – 2018)</h3>
                                        <div className='w-12 h-0.5 bg-[#b8956f]'></div>
                                    </div>
                                    
                                    <div>
                                        <p className='text-[#6b5d4f] mb-2'>Leading lawyer in London for Family law</p>
                                        <h3 className='text-[#2d1f13] font-semibold mb-1'>Legal Awards 2016</h3>
                                        <div className='w-12 h-0.5 bg-[#b8956f]'></div>
                                    </div>
                                    
                                    <div>
                                        <p className='text-[#6b5d4f] mb-2'>The best team in London for International Trade</p>
                                        <h3 className='text-[#2d1f13] font-semibold mb-1'>Legal Awards 2018</h3>
                                        <div className='w-12 h-0.5 bg-[#b8956f]'></div>
                                    </div>
                                    
                                    <div>
                                        <p className='text-[#6b5d4f] mb-2'>Leading lawyer in London for Private clients practice The</p>
                                        <h3 className='text-[#2d1f13] font-semibold mb-1'>Legal500 2018</h3>
                                        <div className='w-12 h-0.5 bg-[#b8956f]'></div>
                                    </div>
                                </div>
                            </section>
                            
                            {/* My Skills Section */}
                            <section>
                                <h2 className='text-3xl font-serif text-[#2d1f13] mb-6'>My Skills</h2>
                                <p className='text-[#6b5d4f] mb-8 leading-relaxed'>
                                    One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into
                                </p>
                                
                                <div className='space-y-6'>
                                    {/* Practice Area - 80% */}
                                    <div>
                                        <div className='flex justify-between items-center mb-3'>
                                            <span className='text-[#2d1f13] font-medium'>Practice Area</span>
                                            <span className='text-[#2d1f13] font-semibold'>80%</span>
                                        </div>
                                        <div className='w-full h-2 bg-[#e5ddd3] rounded-full overflow-hidden'>
                                            <div className='h-full bg-[#8b7355] rounded-full' style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                    
                                    {/* Happy Customer - 100% */}
                                    <div>
                                        <div className='flex justify-between items-center mb-3'>
                                            <span className='text-[#2d1f13] font-medium'>Happy Customer</span>
                                            <span className='text-[#2d1f13] font-semibold'>100%</span>
                                        </div>
                                        <div className='w-full h-2 bg-[#e5ddd3] rounded-full overflow-hidden'>
                                            <div className='h-full bg-[#8b7355] rounded-full' style={{ width: '100%' }}></div>
                                        </div>
                                    </div>
                                    
                                    {/* Firm Size - 70% */}
                                    <div>
                                        <div className='flex justify-between items-center mb-3'>
                                            <span className='text-[#2d1f13] font-medium'>Firm Size</span>
                                            <span className='text-[#2d1f13] font-semibold'>70%</span>
                                        </div>
                                        <div className='w-full h-2 bg-[#e5ddd3] rounded-full overflow-hidden'>
                                            <div className='h-full bg-[#8b7355] rounded-full' style={{ width: '70%' }}></div>
                                        </div>
                                    </div>
                                    
                                    {/* Success Case - 90% */}
                                    <div>
                                        <div className='flex justify-between items-center mb-3'>
                                            <span className='text-[#2d1f13] font-medium'>Success Case</span>
                                            <span className='text-[#2d1f13] font-semibold'>90%</span>
                                        </div>
                                        <div className='w-full h-2 bg-[#e5ddd3] rounded-full overflow-hidden'>
                                            <div className='h-full bg-[#8b7355] rounded-full' style={{ width: '90%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default AttorneyProfile