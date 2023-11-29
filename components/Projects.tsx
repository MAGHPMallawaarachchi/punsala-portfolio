"use client"

import React from 'react'
import Project from './Project'
import { ProjectData } from '@/constants'
import Container from './Container'
import Link from 'next/link'
import Stars from './Stars'
import AnimationWrapper from './AnimationWrapper'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <Container>
      <section className='flex flex-col justify-center items-center sm:gap-16 gap-10' id='projects'>

        <div className='flex justify-between w-full items-end'>

          <AnimationWrapper delay={0.1}>
            <div className='flex items-center'>        
              <Stars/>
              <div>
                  <h2 className='dark:text-light text-dark sm:text-4xl text-2xl leading-none'>My Latest</h2>
                  <h1 className='dark:text-light text-dark sm:text-[80px] text-[60px] sm:tracking-[4px] tracking-[3px] leading-none'>Projects</h1>
              </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper delay={0.1}>
            <div className='hidden sm:flex'>
              <Link href='/projects'>
                <button
                  className="bg-blue uppercase text-dark sm:text-base text-sm font-bold leading-none border-2 border-dark rounded-full sm:w-[160px] w-[120px] py-[5px] hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all duration-200"
                >
                  view all
                </button>
              </Link>
            </div>
          </AnimationWrapper>

        </div>
        
        <div className='flex flex-wrap sm:gap-16 gap-10 items-center justify-center w-full'>
          {ProjectData.slice(0,4).map((project, key) => (
            <motion.div
              key={key}
              initial={{y:100, opacity:0}}
              whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1,
                    delay: key*0.2
                  }
                }}
              viewport={{ once: true}}
            >            
                <Project
                  key={project.key}
                  name={project.name}
                  category={project.category}
                  description={project.description}
                  link={project.link}
                  image={project.image}
                />
            </motion.div>
          ))}
        </div>

        <AnimationWrapper delay={0.2}>
          <div className='sm:hidden flex'>
            <Link href='/projects'>
              <button
                className="bg-blue uppercase text-dark sm:text-base text-sm font-bold leading-none border-2 border-dark rounded-full sm:w-[160px] w-[120px] py-[5px] hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all duration-200"
              >
                view all
              </button>
            </Link>
          </div>
        </AnimationWrapper>

      </section>
    </Container>
  )
}

export default Projects