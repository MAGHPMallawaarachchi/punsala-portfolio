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
            <h4 className='uppercase text-color text-[20px] font-semibold'>{category}</h4>
            <h1 className='text-color tablet:text-[40px] text-[30px]'>{name}</h1>
        </div>
        <div className='h-36'>
          <p className='paragraph max-w-[570px]'>{description}</p>
        </div>
        <button className='button button-text bg-blue w-[229px]'>
            view project
        </button>
    </div>
  )
};

export default Project;