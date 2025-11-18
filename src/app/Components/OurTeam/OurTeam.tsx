'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { getTeamMembers, getTeamMemberPhotoUrl, type PayloadTeamMember } from '@/lib/payload'

interface TeamMemberCard {
  name: string
  position: string
  image: string
  social: {
    facebook: string
    linkedin: string
    pinterest: string
    twitter: string
  }
}

const OurTeam = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [allTeamMembers, setAllTeamMembers] = useState<TeamMemberCard[]>([])
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
              name: member.name.toUpperCase(),
              position: member.position || 'Partner',
              image: getTeamMemberPhotoUrl(member.photo),
              social,
            }
          },
        )

        setAllTeamMembers(transformedMembers)
      } catch (error) {
        console.error('Error fetching team members:', error)
        // Fallback to empty array or show error
        setAllTeamMembers([])
      } finally {
        setLoading(false)
      }
    }

    fetchTeamMembers()
  }, [])

  // Show 4 team members per page
  const teamMembersPerPage = 4
  const totalPages = Math.ceil(allTeamMembers.length / teamMembersPerPage)

  const getCurrentTeamMembers = () => {
    const start = currentPage * teamMembersPerPage
    return allTeamMembers.slice(start, start + teamMembersPerPage)
  }

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="w-full bg-[#f5f0ea] py-20 md:py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Background Text "LAWYER" */}
      <div className="absolute top-12 left-0 right-0 text-center pointer-events-none">
        <h2 className="text-[12rem] md:text-[15rem] lg:text-[20rem] font-serif text-[#e8dfd5] opacity-20 font-normal leading-none tracking-wider">
          LAWYER
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <div className="w-12 h-[2px] bg-[#b8956f] mb-4"></div>
            <span className="text-[#8a7a6a] uppercase text-xs font-light tracking-widest block mb-4">
              TEAM
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2d1f13] font-normal leading-tight">
              Our Lawyer Team
            </h2>
          </div>

          {/* View The Team Link */}
          <a
            href="/Components/OurTeam"
            className="hidden md:flex items-center gap-2 text-[#b8956f] hover:text-[#a67f5a] text-sm uppercase tracking-wider font-light transition-all group mt-12"
          >
            VIEW THE TEAM
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {loading ? (
            // Loading state
            <div className="col-span-full text-center py-12">
              <p className="text-[#8a7a6a]">Loading team members...</p>
            </div>
          ) : allTeamMembers.length === 0 ? (
            // No team members state
            <div className="col-span-full text-center py-12">
              <p className="text-[#8a7a6a]">No team members available.</p>
            </div>
          ) : (
            getCurrentTeamMembers().map((attorney, index) => (
              <div key={`${currentPage}-${index}`} className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-lg mb-6 h-80 bg-gray-200">
                  <Image
                    src={attorney.image}
                    alt={attorney.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Attorney Info */}
                <div className="text-left">
                  <h3 className="text-[#2d1f13] text-base font-semibold mb-2 uppercase tracking-wide">
                    {attorney.name}
                  </h3>
                  <p className="text-[#8a7a6a] text-sm mb-4">{attorney.position}</p>

                  {/* Social Icons */}
                  <div className="flex gap-3">
                    <a
                      href={attorney.social.facebook}
                      className="text-[#b8956f] hover:text-[#a67f5a] transition-colors"
                    >
                      <FaFacebookF size={14} />
                    </a>
                    <a
                      href={attorney.social.linkedin}
                      className="text-[#b8956f] hover:text-[#a67f5a] transition-colors"
                    >
                      <FaLinkedinIn size={14} />
                    </a>
                    <a
                      href={attorney.social.pinterest}
                      className="text-[#b8956f] hover:text-[#a67f5a] transition-colors"
                    >
                      <FaPinterestP size={14} />
                    </a>
                    <a
                      href={attorney.social.twitter}
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

        {/* Navigation Arrows - Only show if there are team members */}
        {!loading && allTeamMembers.length > 0 && (
          <div className="flex justify-center gap-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="w-12 h-12 flex items-center justify-center rounded-md border-2 border-[#d4c4b0] text-[#b8956f] hover:bg-[#b8956f] hover:text-white hover:border-[#b8956f] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#b8956f]"
              aria-label="Previous page"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="w-12 h-12 flex items-center justify-center rounded-md border-2 border-[#d4c4b0] text-[#b8956f] hover:bg-[#b8956f] hover:text-white hover:border-[#b8956f] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#b8956f]"
              aria-label="Next page"
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Mobile View The Team Link */}
        <div className="flex md:hidden justify-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#b8956f] hover:text-[#a67f5a] text-sm uppercase tracking-wider font-light transition-all group"
          >
            VIEW THE TEAM
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default OurTeam
