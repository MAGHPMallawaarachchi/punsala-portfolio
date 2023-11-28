"use client"

import React from 'react'
import Project from './Project'
import { ProjectData } from '@/constants'
import Container from './Container'
import Link from 'next/link'
import { LuSparkle } from "react-icons/lu";

const Projects = () => {
  return (
    <Container>
      <section className='flex flex-col justify-center items-center sm:gap-16 gap-10' id='projects'>

        <div className='flex justify-between w-full items-end'>

          <div className='flex items-center'>
            <div className='flex flex-col'>
              <div className='hidden lg:flex flex-col items-end'>
                <LuSparkle size="72px" className="fill-blue stroke-[0.6px] stroke-dark -mb-6" color="#38B8FF"/>
                <LuSparkle size="46px" className="fill-blue stroke-[0.8px] stroke-dark" color="#38B8FF"/>
              </div>

              <div className='flex lg:hidden flex-col items-end'>
                <LuSparkle size="62px" className="fill-blue stroke-[0.6px] stroke-dark -mb-5" color="#38B8FF"/>
                <LuSparkle size="36px" className="fill-blue stroke-[0.8px] stroke-dark" color="#38B8FF"/>
              </div>
              <div className='h-3'></div>
            </div>
            <div>
                <h2 className='dark:text-light text-dark sm:text-4xl text-2xl leading-none'>My Latest</h2>
                <h1 className='dark:text-light text-dark sm:text-[80px] text-[60px] sm:tracking-[4px] tracking-[3px] leading-none'>Projects</h1>
            </div>
          </div>

          <div className='sm:flex hidden'>
            <Link href='/projects'>
              <button
                className="bg-blue uppercase text-dark sm:text-base text-sm font-bold leading-none border-2 border-dark rounded-full sm:w-[160px] w-[120px] py-[5px] hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all duration-200"
              >
                view all
              </button>
            </Link>
          </div>

        </div>
        
        <div className='flex flex-wrap sm:gap-16 gap-10 items-center justify-center w-full'>
          {ProjectData.slice(0,4).map((project) => (
            <Project
              key={project.key}
              name={project.name}
              category={project.category}
              description={project.description}
              link={project.link}
              image={project.image}
            />
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