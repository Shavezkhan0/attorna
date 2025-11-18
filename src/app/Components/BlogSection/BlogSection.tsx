'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { IoArrowForward } from 'react-icons/io5'
import { getBlogPosts, formatDateShort, type PayloadBlogPost } from '@/lib/payload'

interface BlogPostCard {
  title: string
  date: string
  author: string
  slug?: string
}

const BlogSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState('next')
  const [allBlogPosts, setAllBlogPosts] = useState<BlogPostCard[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch blog posts from Payload CMS
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true)
        const payloadPosts = await getBlogPosts()

        // Transform Payload posts to card format
        const transformedPosts: BlogPostCard[] = payloadPosts.map((post: PayloadBlogPost) => ({
          title: post.title,
          date: formatDateShort(post.publishedAt || post.createdAt),
          author: post.author || 'Admin', // Use author from Payload, default to 'Admin' if not set
          slug: post.slug,
        }))

        setAllBlogPosts(transformedPosts)
      } catch (error) {
        console.error('Error fetching blog posts:', error)
        // Fallback to empty array or show error
        setAllBlogPosts([])
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  // Calculate total number of slides (groups of 3)
  const totalSlides = Math.ceil(allBlogPosts.length / 3)

  // Get current 3 posts
  const getCurrentPosts = () => {
    const startIndex = currentSlide * 3
    return allBlogPosts.slice(startIndex, startIndex + 3)
  }

  const goToSlide = (index: number) => {
    if (index === currentSlide || isTransitioning) return

    // Determine direction
    setDirection(index > currentSlide ? 'next' : 'prev')
    setIsTransitioning(true)
    setCurrentSlide(index)

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 600)
  }

  return (
    <div className="w-full bg-[#f5f0ea] py-20 md:py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Background Text "BLOG" */}
      <div className="absolute top-2 left-0 right-0 text-center pointer-events-none">
        <h2 className="text-[12rem] md:text-[15rem] lg:text-[20rem] font-serif text-[#e8dfd5] opacity-30 font-normal leading-none tracking-wider">
          BLOG
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex justify-between items-start">
          <div>
            <div className="w-12 h-[2px] bg-[#b8956f] mb-6"></div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2d1f13] font-normal leading-tight">
              Our Blog
            </h2>
          </div>

          {/* Read The Blog Link */}
          <a
            href="Components/BlogSection"
            className="hidden md:flex items-center gap-2 text-[#b8956f] hover:text-[#a67f5a] text-sm uppercase tracking-wider font-medium transition-all group "
          >
            READ THE BLOG
            <IoArrowForward className="group-hover:translate-x-1 transition-transform" size={16} />
          </a>
        </div>

        {/* Blog Posts Grid with Left-Right Transition */}
        <div className="relative mb-1 min-h-[250px] overflow-hidden">
          <div
            key={currentSlide}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch ${direction === 'next' ? 'slide-left' : 'slide-right'}`}
          >
            {loading ? (
              // Loading state
              <div className="col-span-full text-center py-12">
                <p className="text-[#8a7a6a]">Loading blog posts...</p>
              </div>
            ) : allBlogPosts.length === 0 ? (
              // No posts state
              <div className="col-span-full text-center py-12">
                <p className="text-[#8a7a6a]">No blog posts available.</p>
              </div>
            ) : (
              // Blog posts
              getCurrentPosts().map((post, index) => {
                const postContent = (
                  <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer h-full flex flex-col">
                    <h3 className="text-[#2d1f13] text-xl md:text-2xl font-normal mb-6 leading-snug group-hover:text-[#b8956f] transition-colors line-clamp-2 min-h-[3.5rem]">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-[#8a7a6a] mt-auto">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.author}</span>
                    </div>
                  </div>
                )

                // If post has a slug, make it a link to the blog detail page; otherwise just show the div
                return post.slug ? (
                  <Link
                    key={`${currentSlide}-${index}`}
                    href={`/Components/BlogSection?slug=${post.slug}`}
                    className="block"
                  >
                    {postContent}
                  </Link>
                ) : (
                  <Link
                    key={`${currentSlide}-${index}`}
                    href={`/Components/BlogSection`}
                    className="block"
                  >
                    {postContent}
                  </Link>
                )
              })
            )}
          </div>
        </div>

        {/* Pagination Dots - Only show if there are posts */}
        {!loading && allBlogPosts.length > 0 && (
          <div className="flex justify-center gap-3 mt-12">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className="relative transition-all duration-300 disabled:cursor-not-allowed"
                aria-label={`Go to slide ${index + 1}`}
              >
                {currentSlide === index ? (
                  <div className="w-12 h-3 bg-[#b8956f] rounded-full transition-all duration-300"></div>
                ) : (
                  <div className="w-3 h-3 bg-[#d4c4b0] rounded-full hover:w-12 hover:bg-[#b8956f] transition-all duration-300"></div>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Mobile Read The Blog Link */}
        <div className="flex md:hidden justify-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#b8956f] hover:text-[#a67f5a] text-sm uppercase tracking-wider font-medium transition-all group"
          >
            READ THE BLOG
            <IoArrowForward className="group-hover:translate-x-1 transition-transform" size={16} />
          </a>
        </div>
      </div>

      {/* Left-Right Slide Transition Styles */}
      <style jsx>{`
        @keyframes slideFromRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .slide-left {
          animation: slideFromRight 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide-right {
          animation: slideFromLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  )
}

export default BlogSection
