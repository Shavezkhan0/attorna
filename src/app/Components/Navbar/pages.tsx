"use client"

import React from 'react'
import TopNavbar from './TopNavbar'
import BottomNavbar from './BottomNavbar'
import { usePageTitle } from '@/app/utils/PageTitle/usePageTitle'

const Navbar = () => {
  // Automatically update page title based on current route
  usePageTitle()

  return (
    <div>
        <TopNavbar />
        <div className='border-b border-[#e8e0d8]'></div>
        <BottomNavbar />
    </div>
  )
}

export default Navbar