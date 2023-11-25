"use client"

import React, { useState } from 'react'
import Star from './icons/Star'
import Project from './Project'
import { ProjectData } from '@/constants'
import Container from './Container'
import Link from 'next/link'

const Projects = () => {
  return (
    <Container>
      <section className='flex flex-col justify-center items-center overflow-hidden' id='projects'>
        <div className='flex sm:mb-20 mb-16'>
          <div className='hidden lg:flex flex-col items-end'>
            <Star height={42}/>
            <Star height={22}/>
          </div>
          <div className='flex lg:hidden flex-col items-end'>
            <Star height={23}/>
            <Star height={14}/>
          </div>
          <h1 className='heading mr-4'>Projects</h1>
        </div>
        
        <div className='flex flex-wrap gap-12 items-center'>
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

          <div className='flex sm:mt-20 mt-10'>
            <Link href='/projects'>
              <button className='border-2 border-dark rounded-full uppercase text-dark text-sm font-bold bg-green w-40 py-2 sm:py-2 xsm:mt-0 mt-5'>View More</button>
            </Link>
          </div>

      </section>
    </Container>
  )
}

export default Projects