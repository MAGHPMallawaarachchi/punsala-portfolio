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
                <motion.h2 
                  className='dark:text-light text-dark sm:text-4xl text-2xl leading-none'
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Hello, I'm
                </motion.h2>

                <motion.h1 
                  className='dark:text-light text-dark sm:text-[80px] text-[60px] sm:tracking-[4px] tracking-[3px] leading-none'
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Punsala
                </motion.h1>
              </div>

              <motion.p 
                className='dark:text-secondary-text text-dark text-left sm:leading-9 leading-7 sm:text-lg text-base font-medium'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                I'm a Software Engineering student at NSBM Green University, with a strong interest in full-stack development. I am eager to learn and grow as a software engineer, and I am excited to contribute my skills and knowledge to a team that is developing innovative and impactful software products.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button text='linkedin' color='green' link='https://www.linkedin.com/in/punsala/'></Button>
              </motion.div>
          </div>

          <motion.div 
            className='flex items-end relative px-8'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
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
          </motion.div>

      </section>
    </Container>
  )
}

export default About