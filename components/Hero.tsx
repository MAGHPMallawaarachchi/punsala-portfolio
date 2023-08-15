import React from 'react'
import Plus from './icons/Plus'
import Star from './icons/Star'

const Hero = () => {
  return (
    <section className='mx-auto max-w-7xl px-8 flex justify-center items-center h-screen'>
        <div className='z-10'>
            <h4 className='text-[22px] text-color tracking-[8.8px] font-medium uppercase mb-4'>Hasini Punsala</h4>
            <h1 className='hero-heading'>Designer</h1>
            <div className='flex items-start my-2 gap-3'>
                <div className='mt-2'><Plus/></div>
                <div className='flex flex-col'>
                    <h1 className='hero-heading'>Developer</h1>
                    <h1 className='text-[107px] leading-none font-outline dark:text-dark text-light'>デベロッパー</h1>
                </div>
            </div>
        </div>
        <div className='flex flex-row z-0 -ml-[110px]'>
            <div className='flex items-end z-10 -mr-[16px]'>
                <Star height={35} width={35} />
            </div>
            <div className='h-[500px] w-[450px] bg-pink my-[16px]'></div>
            <div className='flex flex-col items-end z-5 -ml-[40px]'>
                <Star height={64} width={64} />
                <Star height={35} width={35} />
            </div>
        </div>

    </section>
  )
}

export default Hero