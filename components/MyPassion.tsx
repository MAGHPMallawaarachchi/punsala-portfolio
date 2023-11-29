"use client"

import React from 'react'
import Container from './Container'
import Button from './Button'
import { motion } from 'framer-motion'
import AnimationWrapper from './AnimationWrapper'

const MyPassion = () => {
  return (
    <section className=' dark:bg-gray bg-light-blue sm:rounded-[80px] rounded-[50px]'>
      <Container>
        <div className='flex lg:flex-row flex-col justify-between items-center overflow-hidden gap-10'>

          <motion.div 
            className='lg:w-[50%] w-full aspect-[6/3] bg-pink lg:h-full rounded-2xl'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
          </motion.div>

          <div className='flex flex-col lg:w-[450px] gap-6'>
            <div>
              <AnimationWrapper delay={0.1}>
                <h2 className='dark:text-light text-dark sm:text-4xl text-2xl leading-none'>
                    Coding is
                </h2>
              </AnimationWrapper>

              <AnimationWrapper delay={0.2}>
                <h1 className='dark:text-light text-dark sm:text-[80px] text-[60px] sm:tracking-[4px] tracking-[3px] leading-none'>
                    My Passion
                </h1>
              </AnimationWrapper>
            </div>

            <AnimationWrapper delay={0.3}>
              <p className='dark:text-secondary-text text-dark text-left sm:leading-9 leading-7 sm:text-lg text-base font-medium'>
                  I love coding. I create solutions using code, making ideas real. Challenges excite me. I fix and improve, finding joy. Tech world amazes, making me curious.
              </p>
            </AnimationWrapper>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }} 
              viewport={{ once: true }}
            >
              <Button text='github' color='pink' link='https://github.com/MAGHPMallawaarachchi'></Button>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default MyPassion