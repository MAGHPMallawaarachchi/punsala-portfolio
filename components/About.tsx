"use client"

import React from 'react'
import Image from 'next/image'
import Container from './Container'
import Button from './Button'
import { LuSparkle } from 'react-icons/lu'
import { motion } from 'framer-motion'

const About = () => {

  return (
    <Container>
      <section className='flex lg:flex-row flex-col items-center overflow-hidden justify-between gap-10' id='about'> 
          <div className='flex flex-col lg:justify-between lg:w-[50%] gap-8'>
              <div className='flex flex-col'>
                <h2 className='dark:text-light text-dark sm:text-4xl text-2xl leading-none'>Hello, I'm</h2>
                <h1 className='dark:text-light text-dark sm:text-[80px] text-[60px] sm:tracking-[4px] tracking-[3px] leading-none'>Punsala</h1>
              </div>
              <p className='dark:text-secondary-text text-dark text-left sm:leading-9 leading-7 sm:text-lg text-base font-medium'>I'm a Software Engineering student at NSBM Green University, with a strong interest in full-stack development. I am eager to learn and grow as a software engineer, and I am excited to contribute my skills and knowledge to a team that is developing innovative and impactful software products.</p>
              <Button text='linkedin' color='green' link='https://www.linkedin.com/in/punsala/'></Button>
          </div>

          <div className='flex items-end relative px-8'>
            <motion.div 
              className='flex flex-col items-end absolute -top-2 -right-1'
              initial={{
                rotate: 5,
              }}
              animate={{
                rotate: -5,
              }}
              transition={{
                type: 'tween',
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 0.5,
              }}
            >
              <LuSparkle size="72px" className="fill-pink stroke-[0.6px] stroke-dark -mb-6 z-20" color="#38B8FF"/>
            </motion.div>

            <Image src='/images/portrait.jpg' alt='portrait' width='450' height='450' className='object-cover h-full lg:w-[450px] w-full aspect-square rounded-2xl mt-4 mb-8'/>

            <div className='flex flex-col items-end absolute bottom-0 -left-2'>
              <motion.div
                initial={{
                  rotate: -5,
                }}
                animate={{
                  rotate: 5,
                }}
                transition={{
                  type: 'tween',
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 0.5,
                }}
              >
                <LuSparkle size="72px" className="fill-pink stroke-[0.6px] stroke-dark -mb-6 z-20" color="#38B8FF"/>
              </motion.div>

              <motion.div
                initial={{
                  rotate: 5,
                }}
                animate={{
                  rotate: -5,
                }}
                transition={{
                  type: 'tween',
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 0.5,
                }}
              >
                <LuSparkle size="46px" className="fill-pink stroke-[0.8px] stroke-dark z-20" color="#38B8FF"/>
              </motion.div>
            </div>
          </div>

      </section>
    </Container>
  )
}

export default About