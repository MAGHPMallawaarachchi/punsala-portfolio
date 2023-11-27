import React from 'react'
import Image from 'next/image'
import Container from './Container'

const About = () => {
  return (
    <Container>
      <section className='flex lg:flex-row flex-col items-center overflow-hidden justify-between gap-10' id='about'>
          <div className='flex flex-col lg:justify-between lg:w-[50%] gap-8'>
              <div className='flex flex-col'>
                <h2 className='dark:text-light text-dark sm:text-4xl text-2xl leading-none'>Hello, I'm</h2>
                <h1 className='dark:text-light text-dark sm:text-[80px] text-[60px] sm:tracking-[4px] tracking-[3px] leading-none'>Punsala</h1>
              </div>
              <p className='paragraph'>I'm a Software Engineering student at NSBM Green University, with a strong interest in full-stack development. I am eager to learn and grow as a software engineer, and I am excited to contribute my skills and knowledge to a team that is developing innovative and impactful software products.</p>
              <button className='button-text button bg-green xsm:w-36 w-28 py-2'>LinkedIn</button>
          </div>

          <div className='lg:w-[450px] w-full aspect-square rounded-2xl'>
              <Image src='/images/portrait.jpg' alt='portrait' width='450' height='450' className='object-cover w-full h-full rounded-2xl'/>
          </div>
      </section>
    </Container>
  )
}

export default About