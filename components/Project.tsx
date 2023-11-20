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
    <div className='flex flex-col gap-5'>       
        <Image src={image} width={570} height={362} alt={name} className='rounded-[20px]' />
    
        <div className='flex flex-col items-start'>
            <h4 className='uppercase dark:text-secondary-text text-dark text-lg mb-1'>{category}</h4>
            <h1 className='text-color tablet:text-4xl text-3xl'>{name}</h1>
        </div>
        <div className='h-36'>
          <p className='paragraph max-w-xl'>{description}</p>
        </div>
        <button className='button button-text bg-blue w-48'>
            view project
        </button>
    </div>
  )
};

export default Project;