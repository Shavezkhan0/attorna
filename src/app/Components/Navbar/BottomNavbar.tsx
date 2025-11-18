'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { IoChevronForward } from 'react-icons/io5'
import { MdMenu, MdClose } from 'react-icons/md'

// Define types for menu items
type SubmenuItem = {
  name: string
  url: string
}

type MenuItem = {
  name: string
  hasSubmenu: boolean
  url?: string
  submenu?: SubmenuItem[]
}

const BottomNavbar = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [isPagesHovered, setIsPagesHovered] = useState(false)
  const [isSubmenuHovered, setIsSubmenuHovered] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState<string | null>(null)

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenMobileSubmenu(null)
    setOpenNestedSubmenu(null)
  }, [pathname])

  const pagesMenuItems: MenuItem[] = [
    { name: 'About Us', hasSubmenu: false, url: '/Components/AboutSection' },
    {
      name: 'About Team',
      hasSubmenu: true,
      submenu: [{ name: 'Single Attorney', url: '/Components/personnel/patricia-clark' }],
    },
    {
      name: 'Contact',
      hasSubmenu: true,
      submenu: [
        { name: 'Contact 1', url: '/Components/ContactSection/contact' },
        { name: 'Contact 2', url: '/Components/ContactSection/contact-2' },
      ],
    },
    { name: 'Team', hasSubmenu: false, url: '/Components/OurTeam' },
    { name: 'Gallery', hasSubmenu: false, url: '/Components/gallery' },
  ]

  const getLinkClass = (path: string) => {
    const isActive = pathname === path
    return `${isActive ? '!text-[#b8956f]' : '!text-black'} hover:!text-[#b8956f] text-sm font-medium uppercase tracking-wide transition-colors cursor-pointer`
  }

  // Check if any page in the PAGES dropdown is active
  const isAnyPageActive = () => {
    return pagesMenuItems.some((item) => {
      if (item.url && pathname === item.url) return true
      if (item.submenu) {
        return item.submenu.some((subItem) => pathname === subItem.url)
      }
      return false
    })
  }

  return (
    <>
      {isSticky && <div className="lg:h-[80px] md:h-[70px] h-[60px]"></div>}

      <nav
        className={`w-full bg-[#fcf7f1] transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md animate-slideDown' : 'relative z-40'}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-[80px] lg:h-[80px] md:h-[70px] h-[60px]">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <div className="text-[#b8956f] lg:text-2xl text-xl font-serif">⚖</div>
                </div>
                <span className="text-[#2d1f13] lg:text-sm text-xs font-semibold tracking-wider uppercase">
                  ATTORNA
                </span>
              </a>
            </div>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {/* HOME */}
              <a href="/" className={getLinkClass('/')}>
                HOME
              </a>

              {/* PAGES Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsPagesHovered(true)}
                onMouseLeave={() => setIsPagesHovered(false)}
              >
                <a
                  href="#"
                  className={`${isAnyPageActive() ? '!text-[#b8956f]' : '!text-black'} hover:!text-[#b8956f] text-sm font-medium uppercase tracking-wide transition-colors cursor-pointer`}
                >
                  PAGES
                </a>

                {isPagesHovered && (
                  <div className="absolute top-full left-0 pt-2 bg-transparent z-40">
                    <div className="bg-[#fcf7f1] border border-gray-200 min-w-[200px] shadow-lg rounded-md">
                      {pagesMenuItems.map((item, index) => (
                        <div
                          key={index}
                          className="relative group"
                          onMouseEnter={() => item.hasSubmenu && setIsSubmenuHovered(item.name)}
                          onMouseLeave={() => setIsSubmenuHovered(null)}
                        >
                          <a
                            href={item.hasSubmenu ? '#' : item.url}
                            className={`flex items-center justify-between px-5 py-3 text-sm hover:bg-[#f5f0ea] hover:text-[#b8956f] transition-colors ${isSubmenuHovered === item.name ? 'bg-[#f5f0ea] text-[#b8956f]' : ''} ${item.url && pathname === item.url ? 'bg-[#f5f0ea] text-[#b8956f]' : 'text-black'}`}
                          >
                            <span>{item.name}</span>
                            {item.hasSubmenu && (
                              <IoChevronForward className="text-[#b8956f] ml-2" size={12} />
                            )}
                          </a>

                          {item.hasSubmenu && isSubmenuHovered === item.name && item.submenu && (
                            <div className="absolute left-full top-0 ml-1 bg-[#fcf7f1] border border-gray-200 min-w-[200px] shadow-lg rounded-md z-40">
                              {item.submenu.map((subItem, subIndex) => (
                                <a
                                  key={subIndex}
                                  href={subItem.url}
                                  className={`block px-5 py-3 text-sm hover:bg-[#f5f0ea] hover:text-[#b8956f] transition-colors ${pathname === subItem.url ? 'bg-[#f5f0ea] text-[#b8956f]' : 'text-black'}`}
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* CASE STUDY */}
              <a href="/Components/CaseStudies" className={getLinkClass('/Components/CaseStudies')}>
                CASE STUDY
              </a>

              {/* BLOG */}
              <a href="/Components/BlogSection" className={getLinkClass('/Components/BlogSection')}>
                BLOG
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-6">
              <a href="/Components/ContactSection/contact" className="hidden lg:block">
                <button className="bg-[#b8956f] hover:bg-[#a67f5a] text-white uppercase text-xs font-semibold px-6 py-3 transition-all duration-300">
                  FREE CONSULTATION
                </button>
              </a>
              <button
                className="lg:hidden p-1.5 rounded-md text-[#2d1f13] hover:text-[#b8956f] hover:bg-[#f1e7da] transition-colors"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                {isMobileMenuOpen ? <MdClose size={22} /> : <MdMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-72 bg-[#fcf7f1] shadow-xl transition-transform duration-300 transform z-50 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#e6dcd1]">
            <span className="text-[#2d1f13] text-lg font-semibold tracking-wide uppercase">
              Menu
            </span>
            <button
              className="p-2 rounded-md text-[#2d1f13] hover:text-[#b8956f] hover:bg-[#f1e7da] transition-colors"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MdClose size={24} />
            </button>
          </div>

          <nav className="flex-1 px-6 py-6 space-y-4">
            <a
              href="/"
              className="block text-[#2d1f13] text-sm font-medium uppercase tracking-wide hover:text-[#b8956f] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>

            <div>
              <button
                className="flex w-full items-center justify-between text-left text-[#2d1f13] text-sm font-medium uppercase tracking-wide hover:text-[#b8956f] transition-colors"
                onClick={() => setOpenMobileSubmenu((prev) => (prev === 'PAGES' ? null : 'PAGES'))}
              >
                <span>Pages</span>
                <IoChevronForward
                  className={`transition-transform duration-200 ${openMobileSubmenu === 'PAGES' ? 'rotate-90 text-[#b8956f]' : 'text-black'}`}
                  size={16}
                />
              </button>

              <div
                className={`mt-3 pl-3 border-l border-[#e6dcd1] space-y-3 ${openMobileSubmenu === 'PAGES' ? 'block' : 'hidden'}`}
              >
                {pagesMenuItems.map((item, index) => (
                  <div key={index} className="space-y-2">
                    {item.hasSubmenu ? (
                      <div>
                        <button
                          className="flex w-full items-center justify-between text-left text-[#2d1f13] text-sm uppercase tracking-wide hover:text-[#b8956f] transition-colors"
                          onClick={() =>
                            setOpenNestedSubmenu((prev) => (prev === item.name ? null : item.name))
                          }
                        >
                          <span>{item.name}</span>
                          <IoChevronForward
                            className={`transition-transform duration-200 ${openNestedSubmenu === item.name ? 'rotate-90 text-[#b8956f]' : 'text-black'}`}
                            size={14}
                          />
                        </button>
                        <div
                          className={`mt-2 space-y-2 pl-4 ${openNestedSubmenu === item.name ? 'block' : 'hidden'}`}
                        >
                          {item.submenu?.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.url}
                              className="block text-[#2d1f13] text-sm hover:text-[#b8956f] transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.url}
                        className="block text-[#2d1f13] text-sm hover:text-[#b8956f] transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <a
              href="/Components/CaseStudies"
              className="block text-[#2d1f13] text-sm font-medium uppercase tracking-wide hover:text-[#b8956f] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Study
            </a>

            <a
              href="/Components/BlogSection"
              className="block text-[#2d1f13] text-sm font-medium uppercase tracking-wide hover:text-[#b8956f] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
          </nav>

          <div className="px-6 py-6 border-t border-[#e6dcd1]">
            <a
              href="/Components/ContactSection/contact"
              className="block text-center bg-[#b8956f] hover:bg-[#a67f5a] text-white uppercase text-xs font-semibold px-6 py-3 transition-all duration-300 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default BottomNavbar
