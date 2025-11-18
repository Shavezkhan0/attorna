"use client"

import { useEffect } from 'react'

interface PageTitleProps {
  title: string
}

const PageTitle = ({ title }: PageTitleProps) => {
  useEffect(() => {
    // Set the title immediately
    const fullTitle = title === "Attorna" ? "Attorna" : `${title} - Attorna`
    document.title = fullTitle
    
    // Also update the meta title tag if it exists
    const metaTitle = document.querySelector('title')
    if (metaTitle) {
      metaTitle.textContent = fullTitle
    }
  }, [title])

  return null
}

export default PageTitle

