"use client";

import React, { useState } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaFacebookF, FaLinkedinIn, FaSkype, FaXTwitter } from 'react-icons/fa6';
import PageTitle from '../../../utils/PageTitle/PageTitle';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        
        // Show success message
        setShowSuccess(true);
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
            setShowSuccess(false);
        }, 5000);
    };

    return (
        <>
            <PageTitle title="Contact 2" />

            {/* Hero Section */}
            <section className="bg-[#f5f0ea] py-24 md:py-32 px-6 text-center">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal mb-6 text-[#2d1f13] leading-tight">
                        Contact Us
                    </h1>
                    <p className="text-lg md:text-xl text-[#8a7a6a] font-light">
                        Get Intouch
                    </p>
                </div>
            </section>

            {/* Main Contact Section - Two Column Layout */}
            <section className="bg-[#f5f0ea] py-16 md:py-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        
                        {/* Left Column - Contact Form */}
                        <div>
                            {/* Section Header */}
                            <div className="mb-10">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal mb-6 text-[#2d1f13]">
                                    Leave us your info
                                </h2>
                                <p className="text-base md:text-lg text-[#6b6b6b] leading-relaxed">
                                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
                                </p>
                            </div>

                            {/* Contact Form */}
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name Input */}
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name*"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full py-5 px-6 text-base bg-white border-none outline-none text-[#2d1f13] placeholder:text-[#9b9b9b] focus:outline-none"
                                    required
                                />

                                {/* Email Input */}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email*"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full py-5 px-6 text-base bg-white border-none outline-none text-[#2d1f13] placeholder:text-[#9b9b9b] focus:outline-none"
                                    required
                                />

                                {/* Subject Input */}
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject*"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full py-5 px-6 text-base bg-white border-none outline-none text-[#2d1f13] placeholder:text-[#9b9b9b] focus:outline-none"
                                    required
                                />

                                {/* Message Textarea */}
                                <textarea
                                    name="message"
                                    placeholder="Message*"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full py-5 px-6 text-base bg-white border-none outline-none resize-y text-[#2d1f13] placeholder:text-[#9b9b9b] focus:outline-none min-h-[160px]"
                                    rows={5}
                                    required
                                ></textarea>

                                {/* Submit Button */}
                                <button 
                                    type="submit"
                                    className="w-full py-5 px-10 text-sm font-bold tracking-widest bg-[#b8956f] text-white border-none cursor-pointer hover:bg-[#9b7f5e] transition-colors duration-300 uppercase"
                                >
                                    SUBMIT NOW
                                </button>

                                {/* Success Message */}
                                {showSuccess && (
                                    <div className="mt-4 py-4 px-6 bg-white border-2 border-[#4caf50] text-[#4caf50] text-base">
                                        Thank you for your message. It has been sent.
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Right Column - Location Info */}
                        <div className="lg:pt-24">
                            <div className="mb-12">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal mb-8 text-[#2d1f13]">
                                    Location
                                </h2>
                                
                                <div className="space-y-6">
                                    {/* Address */}
                                    <p className="text-base md:text-lg text-[#6b6b6b] leading-relaxed">
                                        4 apt. Flawing Street. The Grand Avenue.<br />
                                        Liverpool, UK 33342
                                    </p>

                                    {/* Email */}
                                    <div className="flex items-center gap-3">
                                        <FaEnvelope className="text-[#2d1f13] text-lg flex-shrink-0" />
                                        <a 
                                            href="mailto:contact@infinitewptheme.com" 
                                            className="text-[#2d1f13] hover:text-[#b8956f] transition-colors text-base md:text-lg"
                                        >
                                            contact@infinitewptheme.com
                                        </a>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-center gap-3">
                                        <FaPhone className="text-[#2d1f13] text-lg flex-shrink-0" />
                                        <a 
                                            href="tel:+13524335" 
                                            className="text-[#2d1f13] hover:text-[#b8956f] transition-colors text-base md:text-lg"
                                        >
                                            +1-3524-3356
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Icons - Bottom Center */}
                    <div className="flex justify-center items-center gap-8 mt-20 pt-12 border-t border-[#e0d5c7]">
                        <a 
                            href="mailto:contact@infinitewptheme.com" 
                            className="text-[#2d1f13] hover:text-[#b8956f] transition-colors duration-300"
                            aria-label="Email"
                        >
                            <FaEnvelope size={22} />
                        </a>
                        <a 
                            href="https://facebook.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#2d1f13] hover:text-[#b8956f] transition-colors duration-300"
                            aria-label="Facebook"
                        >
                            <FaFacebookF size={22} />
                        </a>
                        <a 
                            href="https://linkedin.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#2d1f13] hover:text-[#b8956f] transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn size={22} />
                        </a>
                        <a 
                            href="https://skype.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#2d1f13] hover:text-[#b8956f] transition-colors duration-300"
                            aria-label="Skype"
                        >
                            <FaSkype size={22} />
                        </a>
                        <a 
                            href="https://twitter.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#2d1f13] hover:text-[#b8956f] transition-colors duration-300"
                            aria-label="Twitter"
                        >
                            <FaXTwitter size={22} />
                        </a>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Contact;