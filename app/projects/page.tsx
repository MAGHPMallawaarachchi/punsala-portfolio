import Container from '@/components/Container';
import Project from '@/components/Project';
import Star from '@/components/icons/Star';
import { ProjectData } from '@/constants';
import Link from 'next/link';
import React from 'react';

export default function ProjectsPage(){
    return(
        <Container>
            <section className='flex flex-col justify-center items-center overflow-hidden' id='projects'>
                <div className='flex sm:mb-20 mb-16 mt-10'>
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
                
                <div className='flex flex-wrap gap-12 items-center'>
                {ProjectData.map((project) => (
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
            </section>
        </Container>
    )
}
