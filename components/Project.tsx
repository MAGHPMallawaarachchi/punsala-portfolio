import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";
import { motion } from "framer-motion";

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
    
        <div className='flex items-center justify-between'>
          <div className='flex flex-col items-start gap-1'>
              <h4 className=' dark:text-secondary-text text-dark text-sm sm:text-xl leading-none font-medium'>{category}</h4>
              <h1 className='dark:text-light text-dark sm:text-[40px] tracking-[2px] text-2xl leading-none'>{name}</h1>
          </div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 90, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9, rotate: 0 }}
          >
            <Link href={link} target="_blank" rel="noopener noreferrer"><BsArrowUpRightCircle size="52px" className="dark:fill-light fill-dark sm:h-[52px] h-[36px]"/></Link>
          </motion.div>
        </div>
    </div>
  )
};

export default Project;