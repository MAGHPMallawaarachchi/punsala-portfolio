import React from 'react'
import { ImPlus } from "react-icons/im";

const Hero = () => {
  return (
    <section className='mx-auto max-w-7xl flex items-center justify-center h-screen'>
      <div>
          <h4 className='lg:text-[22px] sm:text-lg text-xs text-color lg:tracking-[8.8px] sm:tracking-[4.8px] tracking-[2.5px] font-medium uppercase mb-1 sm:mb-0'>Hasini Punsala</h4>
          <h1 className='lg:text-[130px] sm:text-[100px] xsm:text-[55px] text-[40px] dark:text-light text-dark uppercase lg:tracking-[6.5px] sm:tracking-[4.5px] tracking-[2.5px] leading-none -mt-2'>Designer</h1>
          <div className='flex lg:gap-4 sm:gap-3 xsm:gap-2 gap-1 sm:-mt-5 -mt-2'>
            <div className='lg:mt-5 sm:mt-[18px] xsm:mt-[10px] mt-[6px]'>
                <div className='lg:flex hidden'><ImPlus  size="80px" className="fill-green stroke-[0.4px] stroke-dark"/></div>
                <div className='sm:flex lg:hidden hidden'><ImPlus  size="60px" className="fill-green stroke-[0.4px] stroke-dark"/></div>
                <div className='xsm:flex sm:hidden hidden'><ImPlus  size="36px" className="fill-green stroke-[0.4px] stroke-dark"/></div>
                <div className='xsm:hidden'><ImPlus  size="28px" className="fill-green stroke-[0.4px] stroke-dark"/></div>
            </div>
            <div className='flex flex-col items-end'>
              <div className='flex flex-col items-start gap-4'>
                <h1 className='lg:text-[130px] sm:text-[100px] xsm:text-[55px] text-[40px] dark:text-light text-dark uppercase lg:tracking-[6.5px] sm:tracking-[4.5px] tracking-[2.5px] leading-none'>Developer</h1>
                <h1 className='lg:text-[107px] sm:text-[75px] xsm:text-[45px] text-[36px] leading-none lg:font-outline-lg font-outline-sm dark:text-dark text-light sm:-mt-5 -mt-4'>デベロッパー</h1>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero