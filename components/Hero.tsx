import React from 'react'
import Plus from './icons/Plus'
import Star from './icons/Star'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='mx-auto max-w-7xl flex laptop:flex-row flex-col-reverse justify-center items-center h-screen overflow-x-hidden px-8'>

        <div className='z-10 -mt-6 laptop:-mt-0'>
            <h4 className='hidden laptop:flex text-[22px] hero-name mb-4'>Hasini Punsala</h4>
            <h1 className='hero-heading'>Designer</h1>
            <div className='flex items-start my-2 laptop:gap-3 gap-2'>
                <div className='laptop:flex hidden mt-2'><Plus height={80}/></div>
                <div className='tablet:flex laptop:hidden hidden mt-0.5'><Plus height={60}/></div>
                <div className='mobile:flex tablet:hidden hidden mt-0.5'><Plus height={36}/></div>
                <div className='mobile:hidden mt-0.5'><Plus height={28}/></div>
                <div className='flex flex-col'>
                    <h1 className='hero-heading'>Developer</h1>
                    <h1 className='laptop:text-[107px] tablet:text-[75px] mobile:text-[45px] text-[36px] leading-none laptop:font-outline-lg font-outline-sm dark:text-dark text-light'>デベロッパー</h1>
                </div>
            </div>
        </div>

        <div>
            
        </div>

    </section>
  )
}

export default Hero