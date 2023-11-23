import React from 'react'
import Plus from './icons/Plus'
import Star from './icons/Star'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='mx-auto max-w-7xl flex lg:flex-row flex-col-reverse justify-center items-center h-screen overflow-x-hidden px-8'>

        <div className='z-10 -mt-6 lg:-mt-0'>
            <h4 className='hidden lg:flex text-[22px] hero-name mb-4'>Hasini Punsala</h4>
            <h1 className='hero-heading'>Designer</h1>
            <div className='flex items-start my-2 lg:gap-3 gap-2'>
                <div className='lg:flex hidden mt-2'><Plus height={80}/></div>
                <div className='sm:flex lg:hidden hidden mt-0.5'><Plus height={60}/></div>
                <div className='xsm:flex sm:hidden hidden mt-0.5'><Plus height={36}/></div>
                <div className='xsm:hidden mt-0.5'><Plus height={28}/></div>
                <div className='flex flex-col'>
                    <h1 className='hero-heading'>Developer</h1>
                    <h1 className='lg:text-[107px] sm:text-[75px] xsm:text-[45px] text-[36px] leading-none lg:font-outline-lg font-outline-sm dark:text-dark text-light'>デベロッパー</h1>
                </div>
            </div>
        </div>

        <div>
            
        </div>

    </section>
  )
}

export default Hero