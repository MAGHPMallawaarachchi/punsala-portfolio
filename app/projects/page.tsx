"use client"

import React, { useState } from 'react';

import Container from '@/components/Container';
import FilterButton from '@/components/FilterButton';
import ProjectCard from '@/components/ProjectCard';
import { ProjectData, categories } from '@/constants';
import { LuSparkle } from 'react-icons/lu';

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const filteredProjects = selectedCategory === null
      ? ProjectData
      : ProjectData.filter((project) => project.category === selectedCategory);

    const handleFilterButtonClick = (category: any) => {
        setSelectedCategory(category === selectedCategory ? null : category);
    };

    return(
        <Container>
            <section className='flex flex-col items-center gap-12 sm:gap-[80px] mt-[30px]' id='projects'>
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

                    <h1 className='dark:text-light text-dark sm:text-[80px] xsm:text-[60px] text-[40px] sm:tracking-[4px] xsm:tracking-[3px] tracking-[2px] leading-none'>Projects</h1>
                </div>
                
                <div className='flex gap-[20px]'>
                    {categories.map((category) => (
                        <FilterButton active={category.text === selectedCategory} text={category.text} onClick={() => handleFilterButtonClick(category.text)} />
                    ))}
                </div>

                <div className='flex flex-col lg:gap-[100px] gap-[60px] items-center'>
                    {filteredProjects.map((project,key) => (
                        <ProjectCard
                            key={key}
                            name={project.name}
                            category={project.category}
                            description={project.description}
                            link={project.link}
                            image={project.image}
                            techStack={project.techStack}
                        />
                    ))}
                </div>

            </section>
        </Container>
    )
}
