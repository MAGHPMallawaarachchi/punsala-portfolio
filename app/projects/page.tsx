import Container from '@/components/Container';
import Project from '@/components/Project';
import Star from '@/components/icons/Star';
import { ProjectData } from '@/constants';
import Link from 'next/link';
import React from 'react';
import { LuSparkle } from 'react-icons/lu';

export default function ProjectsPage(){
    return(
        <Container>
            <section className='flex flex-col items-center sm:gap-16 gap-10 h-screen' id='projects'>
                <div className='flex items-center'>
                    <div className='flex flex-col'>
                        <div className='hidden lg:flex flex-col items-end'>
                            <LuSparkle size="72px" class="fill-blue stroke-[0.6px] stroke-dark -mb-6" color="#38B8FF"/>
                            <LuSparkle size="46px" class="fill-blue stroke-[0.8px] stroke-dark" color="#38B8FF"/>
                        </div>

                        <div className='flex lg:hidden flex-col items-end'>
                            <LuSparkle size="62px" class="fill-blue stroke-[0.6px] stroke-dark -mb-5" color="#38B8FF"/>
                            <LuSparkle size="36px" class="fill-blue stroke-[0.8px] stroke-dark" color="#38B8FF"/>
                        </div>
                        <div className='h-3'></div>
                    </div>

                    <h1 className='dark:text-light text-dark sm:text-[80px] text-[60px] sm:tracking-[4px] tracking-[3px] leading-none'>Projects</h1>

                </div>

                
                <div className='flex flex-wrap sm:gap-16 gap-10 items-center justify-center w-full'>
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
