import React from 'react'
import Button from './Button'
import Image from 'next/image'

const About = () => {
  return (
    <section className='mx-auto max-w-7xl flex justify-center items-center overflow-hidden paddings' id='about'>

        <div className='flex lg:flex-row flex-col items-center lg:w-full sm:w-[80%] w-full justify-between lg:gap-0 gap-[60px]'>

            <div className='flex flex-col lg:justify-between lg:w-[50%] lg:h-[450px] lg:gap-2 gap-8'>
                <h1 className='sm:leading-[76px] leading-[52px] heading'>Hello,<br/>I'm Punsala</h1>
                <p className='paragraph'>I'm a Software Engineering student at NSBM Green University, with a strong interest in full-stack development. I am eager to learn and grow as a software engineer, and I am excited to contribute my skills and knowledge to a team that is developing innovative and impactful software products.</p>
                <button className='button-text button bg-green w-[177px]'>LinkedIn</button>
            </div>

            <div className='lg:w-[450px] w-full aspect-square bg-pink'>
                <Image src='/images/portrait.jpg' alt='portrait' width='450' height='450' className='object-cover w-full h-full'/>
            </div>

        </div>
        
    </section>
  )
}

export default About