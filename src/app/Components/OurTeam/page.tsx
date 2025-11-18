'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa6'
import PageTitle from '../../utils/PageTitle/PageTitle'
import { getTeamMembers, getTeamMemberPhotoUrl, type PayloadTeamMember } from '@/lib/payload'

interface TeamMemberCard {
  name: string
  position: string
  image: string
  description: string
  social: {
    facebook: string
    linkedin: string
    pinterest: string
    twitter: string
  }
}

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [teamMembers, setTeamMembers] = useState<TeamMemberCard[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch team members from Payload CMS
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true)
        const payloadMembers = await getTeamMembers()

        // Transform Payload team members to card format
        const transformedMembers: TeamMemberCard[] = payloadMembers.map(
          (member: PayloadTeamMember) => {
            // Transform socialLinks array to object format
            const socialLinks = member.socialLinks || []
            const social: {
              facebook: string
              linkedin: string
              pinterest: string
              twitter: string
            } = {
              facebook: '#',
              linkedin: '#',
              pinterest: '#',
              twitter: '#',
            }

            // Map social links by platform name (case-insensitive)
            socialLinks.forEach((link) => {
              const platform = link.platform.toLowerCase()
              if (platform === 'facebook' || platform === 'fb') {
                social.facebook = link.url
              } else if (platform === 'linkedin' || platform === 'li') {
                social.linkedin = link.url
              } else if (platform === 'pinterest' || platform === 'pin') {
                social.pinterest = link.url
              } else if (platform === 'twitter' || platform === 'x') {
                social.twitter = link.url
              }
            })

            return {
              name: member.name,
              position: member.position || 'Partner',
              image: getTeamMemberPhotoUrl(member.photo),
              description:
                member.bio ||
                'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks.',
              social,
            }
          },
        )

        setTeamMembers(transformedMembers)
      } catch (error) {
        console.error('Error fetching team members:', error)
        // Fallback to empty array
        setTeamMembers([])
      } finally {
        setLoading(false)
      }
    }

    fetchTeamMembers()
  }, [])

  // Carousel functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 3 >= teamMembers.length ? 0 : prev + 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 3 < 0 ? Math.max(0, teamMembers.length - 3) : prev - 3))
  }

  const getCurrentMembers = () => {
    return teamMembers.slice(currentSlide, currentSlide + 3)
  }

  return (
    <div className="w-full bg-[#f5f0ea]">
      <PageTitle title="Our Team" />

      {/* Hero Section */}
      <section className="bg-[#f5f0ea] py-20 md:py-28 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal mb-6 text-[#2d1f13] leading-tight">
            Team
          </h1>
        </div>
      </section>

      {/* Personnel 3 Columns Section */}
      <section className="w-full bg-[#f5f0ea] py-16 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2d1f13] font-bold mb-12">
            Personnel 3 Columns
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {loading ? (
              <div className="col-span-full text-center py-12">
                <p className="text-[#8a7a6a]">Loading team members...</p>
              </div>
            ) : teamMembers.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-[#8a7a6a]">No team members available.</p>
              </div>
            ) : (
              teamMembers.slice(0, 6).map((member, index) => (
                <div key={index} className="group">
                  {/* Image */}
                  <div className="relative h-[400px] mb-6 overflow-hidden">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>

                  {/* Name */}
                  <h3 className="text-[#2d1f13] text-xl font-serif font-normal mb-2">
                    {member.name}
                  </h3>

                  {/* Position */}
                  <p className="text-[#b8956f] text-sm mb-4">{member.position}</p>

                  {/* Description */}
                  <p className="text-[#6b5d4f] text-sm leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* Social Icons */}
                  <div className="flex gap-4">
                    <a
                      href={member.social.facebook}
                      className="text-[#b8956f] hover:text-[#a67f5a] transition-colors"
                    >
                      <FaFacebookF size={14} />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="text-[#b8956f] hover:text-[#a67f5a] transition-colors"
                    >
                      <FaLinkedinIn size={14} />
                    </a>
                    <a
                      href={member.social.pinterest}
                      className="text-[#b8956f] hover:text-[#a67f5a] transition-colors"
                    >
                      <FaPinterestP size={14} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-[#b8956f] hover:text-[#a67f5a] transition-colors"
                    >
                      <FaXTwitter size={14} />
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Personnel 4 Columns Section - Without Space */}
      <section className="w-full bg-[#1a1a1a] py-16 md:py-20 relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-20">
          <Image src="/OurExperience/img01.jpg" alt="Background" fill className="object-cover" />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[#b8956f] text-sm uppercase tracking-widest mb-4">Without Space</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white font-normal">
              Personnel 4 Columns
            </h2>
            <div className="w-16 h-0.5 bg-[#b8956f] mx-auto mt-6"></div>
          </div>

          {/* Team Grid - No gaps, edge to edge */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {loading ? (
              <div className="col-span-full text-center py-12">
                <p className="text-white/70">Loading team members...</p>
              </div>
            ) : teamMembers.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-white/70">No team members available.</p>
              </div>
            ) : (
              teamMembers.slice(0, 4).map((member, index) => (
                <div key={index} className="relative group overflow-hidden">
                  {/* Image Container */}
                  <div className="relative h-[500px] lg:h-[600px]">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Info Overlay - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-[#b8956f] text-xl font-serif font-normal mb-2">
                      {member.name}
                    </h3>
                    <p className="text-white/80 text-sm">{member.position}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Personnel with Carousel - Light Background */}
      <section className="w-full bg-[#f5f0ea] py-16 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header with Navigation */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#2d1f13] font-bold uppercase">
              Personnel with Carousel
            </h2>

            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                disabled={loading || teamMembers.length === 0}
                className="w-12 h-12 flex items-center justify-center border-2 border-[#e0d5c7] text-[#2d1f13] hover:bg-[#b8956f] hover:text-white hover:border-[#b8956f] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <FaChevronLeft size={16} />
              </button>
              <button
                onClick={nextSlide}
                disabled={loading || teamMembers.length === 0}
                className="w-12 h-12 flex items-center justify-center border-2 border-[#e0d5c7] text-[#2d1f13] hover:bg-[#b8956f] hover:text-white hover:border-[#b8956f] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <FaChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Carousel Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-full text-center py-12">
                <p className="text-[#8a7a6a]">Loading team members...</p>
              </div>
            ) : teamMembers.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-[#8a7a6a]">No team members available.</p>
              </div>
            ) : (
              getCurrentMembers().map((member, index) => (
                <div key={index} className="bg-white group">
                  {/* Image */}
                  <div className="relative h-[400px] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-[#2d1f13] text-xl font-serif font-normal mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#b8956f] text-sm mb-4">{member.position}</p>
                    <div className="w-12 h-0.5 bg-[#b8956f] mb-4"></div>
                    <p className="text-[#6b5d4f] text-sm leading-relaxed mb-6">
                      {member.description}
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                      <a
                        href={member.social.facebook}
                        className="text-[#b8956f] hover:text-[#a67f5a] transition-colors"
                      >
                        <FaFacebookF size={14} />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="text-[#b8956f] hover:text-[#a67f5a] transition-colors"
                      >
                        <FaLinkedinIn size={14} />
                      </a>
                      <a
                        href={member.social.pinterest}
                        className="text-[#b8956f] hover:text-[#a67f5a] transition-colors"
                      >
                        <FaPinterestP size={14} />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="text-[#b8956f] hover:text-[#a67f5a] transition-colors"
                      >
                        <FaXTwitter size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Personnel with Carousel - Dark Background */}
      <section className="w-full bg-[#1a1a1a] py-16 md:py-20 px-6 md:px-12 lg:px-20 relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-10">
          <Image src="/OurExperience/img02.jpg" alt="Background" fill className="object-cover" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header with Navigation */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <p className="text-[#b8956f] text-sm uppercase tracking-widest mb-4">
                Divider, Excerpt, Social icon can be disabled
              </p>
              <h2 className="text-3xl md:text-4xl font-serif text-white font-normal uppercase">
                Personnel with Carousel
              </h2>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                disabled={loading || teamMembers.length === 0}
                className="w-12 h-12 flex items-center justify-center border-2 border-white/20 text-white hover:bg-[#b8956f] hover:border-[#b8956f] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <FaChevronLeft size={16} />
              </button>
              <button
                onClick={nextSlide}
                disabled={loading || teamMembers.length === 0}
                className="w-12 h-12 flex items-center justify-center border-2 border-white/20 text-white hover:bg-[#b8956f] hover:border-[#b8956f] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <FaChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Carousel Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-full text-center py-12">
                <p className="text-white/70">Loading team members...</p>
              </div>
            ) : teamMembers.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-white/70">No team members available.</p>
              </div>
            ) : (
              getCurrentMembers().map((member, index) => (
                <div key={index} className="group">
                  {/* Image */}
                  <div className="relative h-[400px] overflow-hidden mb-6">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-[#b8956f] text-xl font-serif font-normal mb-2">
                      {member.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-6">{member.position}</p>
                    <p className="text-white/70 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team
