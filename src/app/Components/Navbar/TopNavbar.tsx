import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram, FaXTwitter, FaPinterestP, FaPhone } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";



const TopNavbar = () => {
    return (
        <div className='flex flex-row justify-between items-center w-full h-10 bg-[#fcf7f1] px-4 md:px-8'>
            {/* Social Media Icons */}
            <div className='flex flex-row gap-3 md:gap-4'>
                <FaFacebook size={15} className='text-[#422306] cursor-pointer hover:text-[#ac906c]' />
                <FaLinkedin size={15} className='text-[#422306] cursor-pointer hover:text-[#ac906c]' />
                <FaPinterestP size={15} className='text-[#422306] cursor-pointer hover:text-[#ac906c]' />
                <FaXTwitter size={15} className='text-[#422306] cursor-pointer hover:text-[#ac906c]' />
                <FaInstagram size={15} className='text-[#422306] cursor-pointer hover:text-[#ac906c]' />
            </div>
            
            {/* Contact Information */}
            <div className='flex flex-row items-center gap-4 md:gap-6'>
                <div className='flex flex-row items-center gap-2'>
                    <FaPhone size={13} className='text-[#422306] hover:text-[#ac906c]' />
                    <span className='text-[#422306] text-[6px] md:text-base'>+1-2345-2345-54</span>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <IoMailOpenOutline size={13} className='text-[#422306] hover:text-[#ac906c]' />
                    <span className='text-[#422306] text-[6px] md:text-base'>Contact@Attornasite.co</span>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar