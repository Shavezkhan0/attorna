"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image'
import { IoArrowForward, IoChevronBack, IoChevronForward } from "react-icons/io5";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(true);

  const slides = [
    {
      image: "/sider-item-images/slider-item-1.jpg",
      title: "Attorna Law Firm",
      description: "We are a leading law firm in financial & business industry. With more than 20 years of experience.",
      signature: "Pauline Smith",
      position: "CEO, ATTORNA LAW FIRM"
    },
    {
      image: "/sider-item-images/slider-item-2.jpg",
      title: "Attorna Law Firm",
      description: "We are a leading law firm in financial & business industry. With more than 20 years of experience.",
      signature: "Pauline Smith",
      position: "CEO, ATTORNA LAW FIRM"
    },
    {
      image: "/sider-item-images/slider-item-3.jpg",
      title: "Attorna Law Firm",
      description: "We are a leading law firm in financial & business industry. With more than 20 years of experience.",
      signature: "Pauline Smith",
      position: "CEO, ATTORNA LAW FIRM"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setImageLoaded(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setImageLoaded(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setImageLoaded(false);
  };

  // Auto-play functionality - changes slide automatically
  // Adjust the time (in milliseconds) below: 5000 = 5 seconds, 3000 = 3 seconds, etc.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setImageLoaded(false);
    }, 5000); // ⏰ Change this number to adjust auto-play speed (milliseconds)

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className='relative w-full bg-[#f5f0ea] overflow-hidden'>
      <div className='flex flex-col lg:flex-row items-center min-h-[500px] lg:min-h-[650px]'>
        
        {/* Left Side - Image with Navigation Arrows */}
        <div className='relative w-full lg:w-1/2 h-[400px] lg:h-[650px] bg-[#f5f0ea] flex items-center justify-center p-8 md:p-12 lg:p-16'>
          <div className='relative w-full max-w-[600px] h-full max-h-[450px]'>
            {/* Main Image */}
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className={`object-cover rounded-lg transition-all duration-700 ease-in-out ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              priority
              onLoad={() => setImageLoaded(true)}
              onLoadingComplete={() => setImageLoaded(true)}
            />
            
            {/* Loading placeholder */}
            {!imageLoaded && (
              <div className='absolute inset-0 bg-[#e8dfd5] rounded-lg animate-pulse'></div>
            )}

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className='absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all z-10 backdrop-blur-sm'
              aria-label="Previous slide"
            >
              <IoChevronBack size={24} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className='absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all z-10 backdrop-blur-sm'
              aria-label="Next slide"
            >
              <IoChevronForward size={24} />
            </button>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className='relative w-full lg:w-1/2 bg-[#f5f0ea] px-8 md:px-12 lg:px-20 py-12 lg:py-20 flex flex-col justify-center min-h-[400px] lg:min-h-[650px]'>
          
          {/* Lady Justice Watermark Background */}
          <div className='absolute inset-0 opacity-[0.04] pointer-events-none overflow-hidden'>
            <div 
              className='w-full h-full bg-no-repeat bg-right-bottom bg-contain'
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 300'%3E%3Cg fill='%23000000'%3E%3Crect x='95' y='40' width='10' height='80'/%3E%3Ccircle cx='100' cy='35' r='15'/%3E%3Cpath d='M70 120 Q100 140 130 120 L130 280 L70 280 Z'/%3E%3Cline x1='70' y1='120' x2='30' y2='100' stroke='%23000000' stroke-width='3'/%3E%3Cline x1='130' y1='120' x2='170' y2='100' stroke='%23000000' stroke-width='3'/%3E%3Ccircle cx='30' cy='100' r='15'/%3E%3Ccircle cx='170' cy='100' r='15'/%3E%3Cpath d='M85 20 L115 20 L105 35 L95 35 Z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundPosition: 'right 10% bottom 10%',
                backgroundSize: '55%'
              }}
            ></div>
          </div>

          {/* Content */}
          <div key={currentSlide} className='relative z-10 max-w-xl'>
            {/* Title */}
            <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-[#2d1f13] font-normal mb-6 leading-tight tracking-tight whitespace-nowrap animate-fadeInUp'>
              {slides[currentSlide].title}
            </h1>

            {/* Description */}
            <p className='text-base md:text-lg lg:text-xl text-[#5a4a3a] mb-10 leading-relaxed font-light animate-fadeInUp animation-delay-100'>
              {slides[currentSlide].description}
            </p>

            {/* Contact Now Button */}
            <a href='/Components/ContactSection/contact'>
            <button className='inline-flex items-center gap-3 hover:cursor-pointer  bg-[#b8956f] hover:bg-[#a67f5a] text-white uppercase text-sm tracking-wider font-medium px-8 py-4 transition-all duration-300 group animate-fadeInUp animation-delay-200'>
              CONTACT NOW
              <IoArrowForward className='group-hover:translate-x-1 transition-transform' size={18} />
            </button>
            </a>
          </div>
        </div>

        {/* Signature Section - Bottom Right */}
        <div key={`signature-${currentSlide}`} className='absolute bottom-12 right-12 lg:bottom-16 lg:right-20 z-20 hidden lg:flex flex-col items-end animate-fadeInUp animation-delay-300'>
          <div className='mb-3'>
            <Image
              src="/sider-item-images/slider-signature.png"
              alt="Signature"
              width={200}
              height={80}
              className='opacity-60'
            />
          </div>
          <p className='text-[#2d1f13] text-base font-medium italic mb-1'>
            {slides[currentSlide].signature}
          </p>
          <p className='text-[#8a7a6a] text-xs uppercase tracking-widest font-light'>
            {slides[currentSlide].position}
          </p>
        </div>
      </div>

      {/* Slide Indicators - Pagination Dots (Bottom Center) */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className='relative transition-all duration-300'
            aria-label={`Go to slide ${index + 1}`}
          >
            {currentSlide === index ? (
              // Active dot: border with dark filled center
              <div className='relative w-4 h-4 flex items-center justify-center'>
                <div className='absolute inset-0 border-2 border-[#b8956f] rounded-full'></div>
                <div className='w-2 h-2 bg-[#8b7355] rounded-full'></div>
              </div>
            ) : (
              // Inactive dot: just light border circle
              <div className='relative w-4 h-4'>
                <div className='absolute inset-0 border-2 border-[#d4c4b0] rounded-full'></div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default HeroSection