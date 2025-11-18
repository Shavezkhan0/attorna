'use client'

import { useState, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'
import { getTestimonials, getTestimonialAvatarUrl, type PayloadTestimonial } from '@/lib/payload'

interface TestimonialCard {
  name: string
  location: string
  rating: number
  text: string
  image: string
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [testimonials, setTestimonials] = useState<TestimonialCard[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch testimonials from Payload CMS
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true)
        const payloadTestimonials = await getTestimonials()

        // Transform Payload testimonials to card format
        const transformedTestimonials: TestimonialCard[] = payloadTestimonials.map(
          (testimonial: PayloadTestimonial) => ({
            name: testimonial.clientName,
            location: testimonial.clientTitle || 'Client',
            rating: 5, // Default rating since Payload doesn't have rating field
            text: testimonial.testimonial,
            image: getTestimonialAvatarUrl(testimonial.avatar),
          }),
        )

        setTestimonials(transformedTestimonials)
      } catch (error) {
        console.error('Error fetching testimonials:', error)
        // Fallback to empty array
        setTestimonials([])
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Get previous, current, and next testimonials for display
  const getPrevIndex = () => (currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  const getNextIndex = () => (currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)

  // Reset currentIndex when testimonials change
  useEffect(() => {
    if (testimonials.length > 0 && currentIndex >= testimonials.length) {
      setCurrentIndex(0)
    }
  }, [testimonials.length, currentIndex])

  return (
    <div className="w-full bg-[#f5f0ea] py-20 md:py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Background Text "TESTIMONIALS" */}
      <div className="absolute top-2 left-0 right-0 text-center pointer-events-none">
        <h2 className="text-[8rem] md:text-[12rem] lg:text-[15rem] font-serif text-[#e8dfd5] opacity-30 font-normal leading-none tracking-wider">
          TESTIMONIALS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-[2px] bg-[#b8956f] mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2d1f13] font-normal leading-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Carousel */}
        {loading ? (
          <div className="text-center py-20">
            <p className="text-[#8a7a6a]">Loading testimonials...</p>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#8a7a6a]">No testimonials available.</p>
          </div>
        ) : (
          <>
            <div className="relative flex items-center justify-center gap-6 min-h-[400px]">
              {/* Previous Testimonial (Left - Faded) */}
              <div className="hidden lg:block flex-1 opacity-30 transition-all duration-700 ease-in-out">
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between mb-6">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#ac906c] to-[#9b7938] shrink-0 overflow-hidden relative">
                      <Image
                        src={testimonials[getPrevIndex()].image}
                        alt={testimonials[getPrevIndex()].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 mx-4">
                      <h3 className="text-[#2d1f13] text-lg font-semibold leading-tight">
                        {testimonials[getPrevIndex()].name}
                      </h3>
                      <p className="text-[#8a7a6a] text-sm">
                        {testimonials[getPrevIndex()].location}
                      </p>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      {[...Array(5)].map((_, index) => (
                        <FaStar key={index} className="text-[#b8956f] text-sm" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#6b5d4f] text-sm leading-relaxed line-clamp-4">
                    {testimonials[getPrevIndex()].text}
                  </p>
                </div>
              </div>

              {/* Current Testimonial (Center - Full Opacity) */}
              <div className="flex-1 max-w-3xl transition-all duration-700 ease-in-out transform">
                <div className="bg-white rounded-lg p-10 md:p-12 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between mb-8">
                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ac906c] to-[#9b7938] flex-shrink-0 overflow-hidden relative">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 mx-4">
                      <h3 className="text-[#2d1f13] text-xl md:text-2xl font-semibold leading-tight">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-[#8a7a6a] text-base">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                    <div className="flex gap-1 flex-shrink-0">
                      {[...Array(testimonials[currentIndex].rating)].map((_, index) => (
                        <FaStar key={index} className="text-[#b8956f] text-lg" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#6b5d4f] text-base md:text-lg leading-relaxed">
                    {testimonials[currentIndex].text}
                  </p>
                </div>
              </div>

              {/* Next Testimonial (Right - Faded) */}
              <div className="hidden lg:block flex-1 opacity-30 transition-all duration-700 ease-in-out">
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between mb-6">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ac906c] to-[#9b7938] flex-shrink-0 overflow-hidden relative">
                      <Image
                        src={testimonials[getNextIndex()].image}
                        alt={testimonials[getNextIndex()].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 mx-4">
                      <h3 className="text-[#2d1f13] text-lg font-semibold leading-tight">
                        {testimonials[getNextIndex()].name}
                      </h3>
                      <p className="text-[#8a7a6a] text-sm">
                        {testimonials[getNextIndex()].location}
                      </p>
                    </div>
                    <div className="flex gap-1 flex-shrink-0">
                      {[...Array(5)].map((_, index) => (
                        <FaStar key={index} className="text-[#b8956f] text-sm" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#6b5d4f] text-sm leading-relaxed line-clamp-4">
                    {testimonials[getNextIndex()].text}
                  </p>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="relative transition-all duration-300"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {currentIndex === index ? (
                    <div className="w-12 h-3 bg-[#b8956f] rounded-full transition-all duration-300"></div>
                  ) : (
                    <div className="w-3 h-3 bg-[#d4c4b0] rounded-full hover:w-12 hover:bg-[#b8956f] transition-all duration-300"></div>
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default TestimonialsSection
