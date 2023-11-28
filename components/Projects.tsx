"use client"

import React from 'react'
import Project from './Project'
import { ProjectData } from '@/constants'
import Container from './Container'
import Link from 'next/link'
import { LuSparkle } from "react-icons/lu";
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <Container>
      <section className='flex flex-col justify-center items-center sm:gap-16 gap-10' id='projects'>

        <div className='flex justify-between w-full items-end'>

          <motion.div 
            className='flex items-center'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className='flex flex-col'>
              <div className='hidden lg:flex flex-col items-end'>
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
                    delay: 0.2,
                  }}
                >
                  <LuSparkle size="72px" className="fill-blue stroke-[0.6px] stroke-dark -mb-6" color="#38B8FF"/>
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
                  <LuSparkle size="46px" className="fill-blue stroke-[0.8px] stroke-dark" color="#38B8FF"/>
                </motion.div>
              </div>

              <div className='flex lg:hidden flex-col items-end'>
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
                    delay: 0.2,
                  }}
                >
                  <LuSparkle size="62px" className="fill-blue stroke-[0.6px] stroke-dark -mb-5" color="#38B8FF"/>
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
                  <LuSparkle size="36px" className="fill-blue stroke-[0.8px] stroke-dark" color="#38B8FF"/>
                </motion.div>
              </div>
              <div className='h-3'></div>
            </div>
            <div>
                <h2 className='dark:text-light text-dark sm:text-4xl text-2xl leading-none'>My Latest</h2>
                <h1 className='dark:text-light text-dark sm:text-[80px] text-[60px] sm:tracking-[4px] tracking-[3px] leading-none'>Projects</h1>
            </div>
          </motion.div>

          <motion.div 
            className='sm:flex hidden'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href='/projects'>
              <button
                className="bg-blue uppercase text-dark sm:text-base text-sm font-bold leading-none border-2 border-dark rounded-full sm:w-[160px] w-[120px] py-[5px] hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all duration-200"
              >
                view all
              </button>
            </Link>
          </motion.div>

        </div>
        
        <div className='flex flex-wrap sm:gap-16 gap-10 items-center justify-center w-full'>
          {ProjectData.slice(0,4).map((project, key) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: key*0.2 }}
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

        <div className='sm:hidden flex'>
        <Link href='/projects'>
          <button
            className="bg-blue uppercase text-dark sm:text-base text-sm font-bold leading-none border-2 border-dark rounded-full sm:w-[160px] w-[120px] py-[5px] hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all duration-200"
          >
            view all
          </button>
        </Link>
        </div>

      </section>
    </Container>
  )
}

export default Projects