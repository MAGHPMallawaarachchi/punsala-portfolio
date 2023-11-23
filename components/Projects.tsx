"use client"

import React, { useState } from 'react'
import Star from './icons/Star'
import Project from './Project'
import { ProjectData } from '@/constants'
import Container from './Container'

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const maxVisibleProjects = 4;

  const loadMoreProjects = () => {
    setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 4);
  };

  const loadLessProjects = () => {
    setVisibleProjects(maxVisibleProjects);
  };

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
          <h1 className='heading mr-'>Projects</h1>
        </div>
        
        <div className='flex flex-wrap lg:justify-between justify-center gap-16'>
          {ProjectData.slice(0, visibleProjects).map((project) => (
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

        {visibleProjects < ProjectData.length ? (
          <div className='flex'>
            <button className='button button-text bg-green w-[229px] mt-[30px]' onClick={loadMoreProjects}>View More</button>
            {visibleProjects > maxVisibleProjects && (
              <button className='button button-text bg-green w-[229px] mt-[30px] ml-[20px]' onClick={loadLessProjects}>View Less</button>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </section>
    </Container>
  )
}

export default Projects