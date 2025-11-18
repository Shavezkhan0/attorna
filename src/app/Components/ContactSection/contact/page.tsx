"use client";

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
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
            <PageTitle title="Contact" />

            {/* Hero Section */}
            <section className="bg-[#f5f0ea] py-20 md:py-28 px-6 text-center">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal mb-4 text-[#2d1f13] leading-tight">
                        Contact Us
                    </h1>
                    <p className="text-lg md:text-xl text-[#8a7a6a] font-light">
                        Get Intouch
                    </p>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="bg-[#1a1a1a] py-20 md:py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                        {/* Phone */}
                        <div className="text-white text-center md:text-left">
                            <div className="mb-6 flex justify-center md:justify-start">
                                <div className="w-16 h-16 flex items-center justify-center">
                                    <FaPhone className="text-white text-4xl" />
                                </div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-serif font-normal mb-6 text-white">
                                Phone
                            </h3>
                            <p className="text-base leading-relaxed text-white/70 mb-6">
                                A wonderful serenity has taken possession of my entire soul, like these.
                            </p>
                            <a 
                                href="tel:+12345234554" 
                                className="text-[#b8956f] hover:text-[#d4b583] transition-colors duration-300 text-base"
                            >
                                +1-2345-2345-54
                            </a>
                        </div>

                        {/* Email */}
                        <div className="text-white text-center md:text-left">
                            <div className="mb-6 flex justify-center md:justify-start">
                                <div className="w-16 h-16 flex items-center justify-center">
                                    <FaEnvelope className="text-white text-4xl" />
                                </div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-serif font-normal mb-6 text-white">
                                Email
                            </h3>
                            <p className="text-base leading-relaxed text-white/70 mb-6">
                                A wonderful serenity has taken possession of my entire soul, like these.
                            </p>
                            <a 
                                href="mailto:contact@attornafirm.co" 
                                className="text-[#b8956f] hover:text-[#d4b583] transition-colors duration-300 text-base break-all"
                            >
                                contact@attornafirm.co
                            </a>
                        </div>

                        {/* Location */}
                        <div className="text-white text-center md:text-left">
                            <div className="mb-6 flex justify-center md:justify-start">
                                <div className="w-16 h-16 flex items-center justify-center">
                                    <FaMapMarkerAlt className="text-white text-4xl" />
                                </div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-serif font-normal mb-6 text-white">
                                Location
                            </h3>
                            <p className="text-base leading-relaxed text-white/70 mb-6">
                                4 apt. Flawing Street. The Grand Avenue. Liverpool, UK 33342
                            </p>
                            <a 
                                href="https://maps.google.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-[#b8956f] hover:text-[#d4b583] transition-colors duration-300 text-base"
                            >
                                View On Google Map
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="bg-[#e8e5e0] py-20 md:py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-serif font-normal mb-4 text-[#2d1f13]">
                            Leave us your info
                        </h2>
                        <p className="text-base md:text-lg text-[#6b6b6b] font-light">
                            and we will get back to you.
                        </p>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Input */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name*"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full py-5 px-6 text-base bg-white border-none outline-none text-[#2d1f13] placeholder:text-[#6b6b6b] focus:outline-none shadow-sm"
                            required
                        />

                        {/* Email Input */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email*"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full py-5 px-6 text-base bg-white border-none outline-none text-[#2d1f13] placeholder:text-[#6b6b6b] focus:outline-none shadow-sm"
                            required
                        />

                        {/* Subject Input */}
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject*"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full py-5 px-6 text-base bg-white border-none outline-none text-[#2d1f13] placeholder:text-[#6b6b6b] focus:outline-none shadow-sm"
                            required
                        />

                        {/* Message Textarea */}
                        <textarea
                            name="message"
                            placeholder="Message*"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full py-5 px-6 text-base bg-white border-none outline-none resize-y text-[#2d1f13] placeholder:text-[#6b6b6b] focus:outline-none shadow-sm min-h-[180px]"
                            rows={6}
                            required
                        ></textarea>

                        {/* Submit Button */}
                        <button 
                            type="submit"
                            className="w-full py-5 px-10 text-sm font-semibold tracking-widest bg-[#b8956f] text-white border-none cursor-pointer hover:bg-[#9b7f5e] transition-colors duration-300 uppercase"
                        >
                            SUBMIT NOW
                        </button>

                        {/* Success Message */}
                        {showSuccess && (
                            <div className="mt-2 py-4 px-6 bg-white border-2 border-[#4caf50] text-[#4caf50] text-base">
                                Thank you for your message. It has been sent.
                            </div>
                        )}
                    </form>

                    {/* Social Icons */}
                    <div className="flex justify-center items-center gap-6 mt-16">
                        <a 
                            href="mailto:contact@attornafirm.co" 
                            className="text-[#2d1f13] hover:text-[#b8956f] transition-colors duration-300"
                            aria-label="Email"
                        >
                            <FaEnvelope size={20} />
                        </a>
                        <a 
                            href="https://facebook.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#2d1f13] hover:text-[#b8956f] transition-colors duration-300"
                            aria-label="Facebook"
                        >
                            <FaFacebookF size={20} />
                        </a>
                        <a 
                            href="https://skype.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#2d1f13] hover:text-[#b8956f] transition-colors duration-300"
                            aria-label="Skype"
                        >
                            <FaSkype size={20} />
                        </a>
                        <a 
                            href="https://twitter.com" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#2d1f13] hover:text-[#b8956f] transition-colors duration-300"
                            aria-label="Twitter"
                        >
                            <FaXTwitter size={20} />
                        </a>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Contact;