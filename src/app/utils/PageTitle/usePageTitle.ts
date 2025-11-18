"use client"

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Map of paths to page titles
const pageTitles: Record<string, string> = {
  '/': 'Attorna',
  '/Components/AboutSection': 'About Us',
  '/Components/CaseStudies': 'Case Studies',
  '/Components/BlogSection': 'Blog',
  '/Components/gallery': 'Gallery',
  '/Components/ContactSection/contact': 'Contact',
  '/Components/ContactSection/contact-2': 'Contact 2',
  '/Components/OurTeam/team': 'Our Team',
  '/Components/personnel/patricia-clark': 'Patricia Clark - Single Attorney',
  '/Components/OurExperience/corporate-securities': 'Corporate & Securities',
  '/Components/OurExperience/healthcare-law': 'Healthcare Law',
  '/Components/OurExperience/tax-law': 'Tax Law',
  '/Components/OurExperience/real-estate-law': 'Real Estate Law',
  '/Components/OurExperience/insurance-law': 'Insurance Law',
  '/Components/OurExperience/e-commerce-law': 'E-Commerce Law',
}

export const usePageTitle = () => {
  const pathname = usePathname()

  useEffect(() => {
    // Function to set the title
    const setTitle = () => {
      const title = pageTitles[pathname] || 'Attorna'
      const fullTitle = title === 'Attorna' ? 'Attorna' : `${title} - Attorna`
      
      if (typeof document !== 'undefined') {
        // Set document.title - this is the most reliable way
        document.title = fullTitle
        
        // Also update the title element directly
        const titleElement = document.querySelector('title')
        if (titleElement) {
          titleElement.textContent = fullTitle
          titleElement.innerHTML = fullTitle
        }
      }
    }

    // Set immediately
    setTitle()
    
    // Set after multiple delays to ensure it overrides any other title changes
    const timer1 = setTimeout(setTitle, 50)
    const timer2 = setTimeout(setTitle, 200)
    const timer3 = setTimeout(setTitle, 500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [pathname])
}

