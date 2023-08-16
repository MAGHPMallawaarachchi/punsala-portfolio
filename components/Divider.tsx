"use client"

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Star from './icons/Star'

const Divider = () => {
  const [numRepeat, setNumRepeat] = useState(0);

  useEffect(() => {
    const calculateNumRepeat = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setNumRepeat(10);
      } else if (screenWidth >= 1024) {
        setNumRepeat(6);
      } else if (screenWidth >= 768) {
        setNumRepeat(5);
      } else if (screenWidth >= 640) {
        setNumRepeat(4);
      } else{
        setNumRepeat(3);
      }
    };

    calculateNumRepeat();
    window.addEventListener('resize', calculateNumRepeat);

    return () => {
      window.removeEventListener('resize', calculateNumRepeat);
    };
  }, []);

  return (
    <section className='w-full overflow-hidden'>
      <div className='flex justify-between gap-2'>
        {Array.from({ length: numRepeat }, (_, index) => (
          <div key={index} className='flex gap-1 items-center'>
            <Star height={17} />
            <Image 
              src='/images/Punsala.svg'
              alt='Punsala'
              width={81}
              height={17}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Divider;
