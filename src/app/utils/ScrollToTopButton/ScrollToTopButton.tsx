'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className='fixed bottom-8 right-8 z-50'>
      <button
        onClick={handleClick}
        className='group w-10 h-10 bg-[#b8956f] hover:bg-[#786045] rounded-full flex items-center justify-center transition-colors shadow-md cursor-pointer'
        aria-label="Scroll to top"
      >
        <FaArrowUp className='text-white text-lg transition-colors group-hover:text-[#f5f0e9]' />
      </button>
    </div>
  );
}