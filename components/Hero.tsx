import React from 'react'
import Plus from './icons/Plus'
import Star from './icons/Star'

const Hero = () => {
  return (
    <section className='mx-auto max-w-7xl px-8 flex laptop:flex-row flex-col-reverse justify-center items-center height overflow-hidden'>

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

        <div className='flex flex-row z-0 laptop:-ml-[125px] tablet:-ml-[175px] mobile:-ml-[125px] -ml-[80px]'>
            <div className='hidden laptop:flex items-end z-10 -mr-[16px]'>
                <Star height={35} />
            </div>

            <div className='laptop:hidden flex items-center tablet:-mr-[140px] mobile:-mr-24 -mr-[72px] mb-5'>
                <h4 className='tablet:text-[26px] mobile:text-base text-xs hero-name -rotate-90'>Hasini Punsala</h4>
            </div>

            <div className='laptop:h-[500px] laptop:w-[450px] tablet:h-[530px] tablet:w-[480px] mobile:w-[290px] mobile:h-[320px] w-[215px] h-[235px] min-w-[215px] min-h-[235px] bg-pink my-[16px]'></div>
            <div className='hidden tablet:flex flex-col items-end z-5 -ml-[40px]'>
                <Star height={64} />
                <Star height={35} />
            </div>
            <div className='hidden tablet:hidden mobile:flex flex-col items-end z-5 -ml-[25px]'>
                <Star height={41} />
                <Star height={22} />
            </div>
            <div className='mobile:hidden flex flex-col items-end z-5 -ml-[18px] mt-2'>
                <Star height={32} />
                <Star height={17} />
            </div>
        </div>

        <div>
            
        </div>

    </section>
  )
}

export default Hero