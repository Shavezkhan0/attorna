"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import PageTitle from '../../utils/PageTitle/PageTitle'

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedImage, setSelectedImage] = useState(0)

  const galleryImages = [
    {
      src: "/gallery/tingey-injury-law-firm-DZpc4UY8ZtY-unsplash.jpg",
      title: "Legal Books Collection",
      caption: "RAWPIXEL-703120-UNSPLASH"
    },
    {
      src: "/gallery/rawpixel-703120-unsplash.jpg",
      title: "Lady Justice Statue",
      caption: "ROB-GIRKIN-769736-UNSPLASH"
    },
    {
      src: "/gallery/sebastian-pichler-25154-unsplash.jpg",
      title: "Court House Architecture",
      caption: "SEBASTIAN-PICHLER-25134-UNSPLASH"
    },
    {
      src: "/gallery/rob-girkin-769736-unsplash.jpg",
      title: "Legal Contract Signing",
      caption: "RAWPIXEL-703120-UNSPLASH"
    }
  ]

  // Carousel Navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  // Thumbnail Gallery Navigation
  const nextImage = () => {
    setSelectedImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  return (
    <div className='w-full bg-[#f5f0ea]'>
      <PageTitle title="Gallery" />

      {/* Hero Section */}
      <section className="bg-[#f5f0ea] py-20 md:py-28 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal mb-6 text-[#2d1f13] leading-tight">
            Gallery
          </h1>
        </div>
      </section>

      {/* Grid Style - With Space */}
      <section className='w-full bg-[#f5f0ea] py-16 md:py-20 px-6 md:px-12 lg:px-20'>
        <div className='max-w-7xl mx-auto'>
          {/* Section Header */}
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif text-[#2d1f13] font-bold mb-4'>
              Grid Style
            </h2>
            <p className='text-[#8a7a6a] text-base'>With Space</p>
          </div>

          {/* Grid with Gaps */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className='group relative overflow-hidden cursor-pointer aspect-square'
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                />
                {/* Overlay on hover */}
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center'>
                  <span className='text-white opacity-0 group-hover:opacity-100 transition-opacity text-lg font-medium'>
                    +
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Style - Without Space */}
      <section className='w-full bg-[#f5f0ea] py-16 md:py-20'>
        <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-20'>
          {/* Section Header */}
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif text-[#2d1f13] font-bold mb-4'>
              Grid Style
            </h2>
            <p className='text-[#8a7a6a] text-base'>Without Space</p>
          </div>
        </div>

        {/* Grid without Gaps - Full Width */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className='group relative overflow-hidden cursor-pointer aspect-square'
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-110'
              />
              {/* Overlay on hover */}
              <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center'>
                <span className='text-white opacity-0 group-hover:opacity-100 transition-opacity text-2xl font-light'>
                  +
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Plain Carousel */}
      <section className='w-full bg-[#1a1a1a] py-16 md:py-20 px-6 md:px-12 lg:px-20 relative'>
        {/* Background Image with Overlay */}
        <div className='absolute inset-0 opacity-20'>
          <Image
            src="/OurExperience/img03.jpg"
            alt="Background"
            fill
            className='object-cover'
          />
        </div>

        <div className='max-w-5xl mx-auto relative z-10'>
          {/* Section Header */}
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif text-white font-normal mb-4'>
              Gallery Plain Carousel
            </h2>
            <p className='text-white/70 text-sm'>Hover With Title & Caption</p>
          </div>

          {/* Carousel Container */}
          <div className='relative'>
            {/* Main Image */}
            <div className='relative h-[400px] md:h-[500px] lg:h-[600px]'>
              <Image
                src={galleryImages[currentSlide].src}
                alt={galleryImages[currentSlide].title}
                fill
                className='object-cover'
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className='absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all z-10'
              aria-label="Previous"
            >
              <FaChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className='absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all z-10'
              aria-label="Next"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery With Thumbnail */}
      <section className='w-full bg-[#f5f0ea] py-16 md:py-20 px-6 md:px-12 lg:px-20'>
        <div className='max-w-5xl mx-auto'>
          {/* Section Header */}
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif text-[#2d1f13] font-bold mb-4'>
              Gallery With Thumbnail
            </h2>
            <p className='text-[#8a7a6a] text-sm'>Hover With Title & Caption</p>
          </div>

          {/* Main Image Container */}
          <div className='relative mb-8'>
            {/* Main Image */}
            <div className='relative h-[400px] md:h-[500px] lg:h-[600px]'>
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                fill
                className='object-cover'
              />

              {/* Caption Overlay */}
              <div className='absolute bottom-0 left-0 right-0 bg-black/70 text-white py-4 px-6'>
                <p className='text-sm uppercase tracking-wider'>
                  {galleryImages[selectedImage].caption}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className='absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all z-10'
              aria-label="Previous"
            >
              <FaChevronLeft size={16} />
            </button>

            <button
              onClick={nextImage}
              className='absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all z-10'
              aria-label="Next"
            >
              <FaChevronRight size={16} />
            </button>
          </div>

          {/* Thumbnail Grid */}
          <div className='grid grid-cols-4 gap-4'>
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square cursor-pointer overflow-hidden transition-all duration-300 ${
                  selectedImage === index 
                    ? 'ring-4 ring-[#b8956f] scale-95' 
                    : 'hover:scale-105'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className='object-cover'
                />
                {/* Overlay for non-selected images */}
                {selectedImage !== index && (
                  <div className='absolute inset-0 bg-black/20 hover:bg-black/0 transition-all'></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Gallery