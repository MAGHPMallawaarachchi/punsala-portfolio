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
    <div className='flex flex-col gap-[20px] max-w-[520px]'>       
        <Image src={image} width={540} height={100} alt={name} className='rounded-2xl' />
    
        <div className='flex flex-col items-start gap-1'>
            <h4 className=' dark:text-secondary-text text-dark text-sm sm:text-lg font-medium'>{category}</h4>
            <h1 className='dark:text-light text-dark sm:text-4xl text-3xl'>{name}</h1>
        </div>
        
        <p className='text-dark dark:text-secondary-text text-base'>{description}</p>

        <button className='border-2 border-dark rounded-full uppercase text-dark text-sm font-bold bg-blue w-40 py-2 sm:py-2'>
            view project
        </button>
    </div>
  )
};

export default Project;