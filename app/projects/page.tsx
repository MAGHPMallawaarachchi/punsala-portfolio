"use client"

import React, { useState } from 'react';
import Container from '@/components/Container';
import FilterButton from '@/components/FilterButton';
import ProjectCard from '@/components/ProjectCard';
import { ProjectData, categories } from '@/constants';
import AnimationWrapper from '@/components/AnimationWrapper';
import Stars from '@/components/Stars';
import { motion } from 'framer-motion';

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
            <section className='flex flex-col items-center sm:gap-[60px] mt-[30px]' id='projects'>
                <AnimationWrapper delay={0.1}>
                    <div className='flex items-center mb-12'>
                        <Stars/>
                        <h1 className='dark:text-light text-dark sm:text-[80px] xsm:text-[60px] text-[40px] sm:tracking-[4px] xsm:tracking-[3px] tracking-[2px] leading-none'>Projects</h1>
                    </div>
                </AnimationWrapper>
                
                <div className='flex flex-wrap gap-[20px] justify-center'>
                    {categories.map((category, key) => (
                        <AnimationWrapper delay={key*0.2}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                            >
                                <FilterButton active={category.text === selectedCategory} text={category.text} onClick={() => handleFilterButtonClick(category.text)} />
                            </motion.div>
                        </AnimationWrapper>
                    ))}
                </div>

                <div className='flex flex-col lg:gap-[100px] gap-[60px] items-center mb-12'>
                    {filteredProjects.map((project,key) => (
                        <motion.div
                            initial={{y:100, opacity:0}}
                            whileInView={{
                                y: 50,
                                opacity: 1,
                                transition: {
                                  type: "spring",
                                  bounce: 0.4,
                                  duration: 0.8,
                                  delay: key*0.2
                                }
                              }}
                              viewport={{ once: true}}
                        >
                            <ProjectCard
                                key={key}
                                name={project.name}
                                category={project.category}
                                description={project.description}
                                link={project.link}
                                image={project.image}
                                techStack={project.techStack}
                            />
                        </motion.div>
                    ))}
                </div>

            </section>
        </Container>
    )
}
