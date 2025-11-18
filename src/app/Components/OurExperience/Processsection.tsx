"use client"

import React from 'react'

interface ProcessStep {
  number: string
  title: string
  description: string
  details?: string
}

const ProcessSection = () => {
  const processSteps: ProcessStep[] = [
    {
      number: "1.",
      title: "Initial Consultation",
      description: "This process begins with a client seeking legal assistance in Corporate & Securities Law. Attorna offers an initial consultation where clients can discuss their specific needs and challenges."
    },
    {
      number: "2.",
      title: "Legal Strategy and Services",
      description: "After the initial consultation, Attorna attorneys devise a tailored legal strategy based on the client's goals.",
      details: "This process involves determining the appropriate corporate structure, regulatory compliance, and legal contracts needed."
    },
    {
      number: "3.",
      title: "Securities Compliance",
      description: "For clients seeking assistance with securities-related matters, Attorna provides guidance on securities transactions such as IPOs and private placements. This process includes ensuring that all regulatory requirements are met."
    },
    {
      number: "4.",
      title: "Ongoing Legal Support",
      description: "This process involves addressing day-to-day legal matters, ensuring compliance with changing regulations, and handling any legal issues that may arise during the course of business operations. Attorna remains a trusted partner, offering guidance to clients as they navigate the dynamic corporate landscape."
    },
    {
      number: "5.",
      title: "Dispute Resolution",
      description: "In cases where disputes or legal challenges arise, Attorna offers litigation and dispute resolution services.",
      details: "This process includes representing clients' interests vigorously in court, negotiations, or alternative dispute resolution methods."
    }
  ]

  return (
    <div className='bg-[#F5F0EA] py-16 border-b border-[#d4c4b0]'>
      <div className='container mx-auto px-4 md:px-8 lg:px-16'>
        <div className='max-w-6xl mx-auto'>
          <div className='mb-12'>
            <h2 className='text-3xl md:text-4xl font-serif text-[#2d1f13] font-normal mb-4 leading-tight'>
              The Process
            </h2>
          </div>

          <div className='space-y-10'>
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className='grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-16'
              >
                {/* Left - Title */}
                <h3 className='text-lg md:text-xl text-[#2d1f13] font-medium'>
                  {step.number} {step.title}
                </h3>
                
                {/* Right - Description */}
                <div className='space-y-6'>
                  <p className='text-[#6b5d4f] text-base leading-relaxed'>
                    {step.description}
                  </p>
                  {step.details && (
                    <p className='text-[#6b5d4f] text-base leading-relaxed'>
                      {step.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProcessSection