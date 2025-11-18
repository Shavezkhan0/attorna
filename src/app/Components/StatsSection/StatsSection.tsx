"use client"

const StatsSection = () => {
  const stats = [
    {
      number: "1000+",
      label: "Client Consultations"
    },
    {
      number: "95%",
      label: "Successful Cases"
    },
    {
      number: "10m",
      label: "Recovered cost for clients"
    },
    {
      number: "30+",
      label: "Professional Attorneys"
    }
  ]

  return (
    <div className='w-full bg-white py-16 md:py-20 px-6 md:px-12 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className='relative text-center py-8 px-6'
            >
              {/* Vertical Divider - Right Side (except last item) */}
              {index < stats.length - 1 && (
                <div className='hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-px bg-[#e0d5c7]'></div>
              )}

              {/* Number */}
              <div className='text-5xl md:text-6xl lg:text-7xl font-light text-[#2d1f13] mb-4 font-serif'>
                {stat.number}
              </div>

              {/* Label */}
              <div className='text-[#8a7a6a] text-sm md:text-base font-light leading-relaxed'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StatsSection