"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { IoAdd, IoRemove } from "react-icons/io5"

interface FAQ {
  question: string
  answer: string
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  const faqs: FAQ[] = [
    {
      question: "What areas of law does Attorna specialize in?",
      answer: "Attorna specializes in a wide range of legal areas, including personal injury, immigration, corporate law, estate planning, family law, and more. Our experienced team of attorneys is well-equipped."
    },
    {
      question: "How can I schedule a consultation with Attorna?",
      answer: "Attorna specializes in a wide range of legal areas, including personal injury, immigration, corporate law, estate planning, family law, and more. Our experienced team of attorneys is well-equipped."
    },
    {
      question: "What sets Attorna apart from other law firms?",
      answer: "Attorna specializes in a wide range of legal areas, including personal injury, immigration, corporate law, estate planning, family law, and more. Our experienced team of attorneys is well-equipped."
    },
    {
      question: "How much do your legal services cost?",
      answer: "Attorna specializes in a wide range of legal areas, including personal injury, immigration, corporate law, estate planning, family law, and more. Our experienced team of attorneys is well-equipped."
    },
    {
      question: "Will I have direct contact with an attorney on my case?",
      answer: "Attorna specializes in a wide range of legal areas, including personal injury, immigration, corporate law, estate planning, family law, and more. Our experienced team of attorneys is well-equipped."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='container mx-auto px-4 py-12 mb-16'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
        {/* Left Side - Image */}
        <div className='relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden'>
          <Image
            src="/about/img2-about.png"
            alt="Law courthouse"
            fill
            className='object-cover'
          />
        </div>

        {/* Right Side - FAQ Accordion */}
        <div className='pl-0 lg:pl-8'>
          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className='border-b border-[#e8e0d8] pb-4'
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className='w-full flex items-center justify-between text-left py-4 group'
                >
                  <span className='text-[#2d1f13] text-base md:text-lg font-medium pr-4 group-hover:text-[#8b7355] transition-colors'>
                    {faq.question}
                  </span>
                  <div className='flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#8b7355]'>
                    {openIndex === index ? (
                      <IoRemove size={24} />
                    ) : (
                      <IoAdd size={24} />
                    )}
                  </div>
                </button>

                {/* Answer - Collapsible */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100 mb-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className='bg-[#f5f0ea] rounded-lg p-6 text-[#6b5d4f] text-sm md:text-base leading-relaxed'>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQSection