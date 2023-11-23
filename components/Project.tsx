import Image from 'next/image'
import React from 'react'

type Props = {
    name: string
    category: string
    description: string
    link: string
    image: string
};

const Project = ({name, category, description, link, image}: Props) => {
  return (
    <div className='flex flex-col gap-6 max-w-xl w-[45%]'>       
        <Image src={image} width={570} height={362} alt={name} className='rounded-2xl' />
    
        <div className='flex flex-col items-start gap-1'>
            <h4 className='uppercase dark:text-secondary-text text-dark text-sm sm:text-lg'>{category}</h4>
            <h1 className='dark:text-light text-dark sm:text-4xl text-3xl'>{name}</h1>
        </div>
        <div className='h-36'>
          <p className='paragraph'>{description}</p>
        </div>
        <button className='button button-text bg-blue w-40 py-2 sm:py-1 xsm:mt-0 mt-5'>
            view project
        </button>
    </div>
  )
};

export default Project;