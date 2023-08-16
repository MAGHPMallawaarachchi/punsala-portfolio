import React from 'react'
import Button from './Button'

const About = () => {
  return (
    <section className='mx-auto max-w-7xl flex justify-center items-center overflow-hidden paddings'>

        <div className='flex laptop:flex-row flex-col items-center laptop:w-full tablet:w-[80%] w-full justify-between laptop:gap-0 gap-[60px]'>

            <div className='flex flex-col laptop:justify-between laptop:w-[50%] laptop:h-[450px] laptop:gap-2 gap-8'>
                <h1 className='tablet:leading-[76px] leading-[52px] heading'>Hello,<br/>I'm Hasini !</h1>
                <p className='paragraph'>I'm a Software Engineering student at NSBM Green University, specializing in UI/UX design and full stack web development. Bridging design and development, I'm dedicated to enhancing user interactions and bringing a fresh perspective to software engineering.</p>
                <button className='button-text button bg-green w-[177px]'>LinkedIn</button>
            </div>

            <div className='laptop:w-[450px] w-full aspect-square bg-pink'>

            </div>

        </div>
        
    </section>
  )
}

export default About