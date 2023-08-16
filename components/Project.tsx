import Image from 'next/image'
import React from 'react'

type Props = {
    name: string
    category: string
    description: string
    link: string
    image: string
}

const Project = ({name, category, description, link, image}: Props) => {
  return (
    <div className='flex flex-col pb-[60px]'>       
        <Image src={image} width={570} height={362} alt={name} className='rounded-[20px] mb-[20px]' />
    
        <div className='flex flex-col mb-[20px] items-start'>
            <h4 className='uppercase text-color text-[20px] font-semibold'>{category}</h4>
            <h1 className='text-color tablet:text-[40px] text-[30px]'>{name}</h1>
        </div>
        <p className='paragraph max-w-[570px] mb-[20px]'>{description}</p>
        <button className='button button-text bg-blue w-[229px]'>
            view project
        </button>

    </div>
  )
}

export default Project