import React from 'react'
import Image from 'next/image'
import Container from './Container'

const About = () => {
  return (
    <Container>
      <section className='flex lg:flex-row flex-col justify-center items-center overflow-hidden gap-10' id='about'>
          <div className='flex flex-col lg:justify-between lg:w-[50%] gap-8'>
              <h1 className='sm:leading-[76px] leading-[52px] heading'>Hello,<br/>I'm Punsala</h1>
              <p className='paragraph'>I'm a Software Engineering student at NSBM Green University, with a strong interest in full-stack development. I am eager to learn and grow as a software engineer, and I am excited to contribute my skills and knowledge to a team that is developing innovative and impactful software products.</p>
              <button className='button-text button bg-green xsm:w-36 w-28 xsm:py-1 py-2'>LinkedIn</button>
          </div>

          <div className='lg:w-[450px] w-full aspect-square bg-pink'>
              <Image src='/images/portrait.jpg' alt='portrait' width='450' height='450' className='object-cover w-full h-full'/>
          </div>
      </section>
    </Container>
  )
}

export default About