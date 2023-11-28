import React from 'react'
import Container from './Container'
import Button from './Button'

const MyPassion = () => {
  return (
    <section className=' dark:bg-gray bg-light-blue sm:rounded-[80px] rounded-[50px]'>
      <Container>
        <div className='flex lg:flex-row flex-col justify-between items-center overflow-hidden gap-10'>
          <div className='lg:w-[50%] w-full aspect-[6/3] bg-pink lg:h-full rounded-2xl'></div>

          <div className='flex flex-col lg:w-[450px] gap-6'>
            <div>
              <h2 className='dark:text-light text-dark sm:text-4xl text-2xl leading-none'>Coding is</h2>
              <h1 className='dark:text-light text-dark sm:text-[80px] text-[60px] sm:tracking-[4px] tracking-[3px] leading-none'>My Passion</h1>
            </div>

            <p className='dark:text-secondary-text text-dark text-left sm:leading-9 leading-7 sm:text-lg text-base font-medium'>I love coding. I create solutions using code, making ideas real. Challenges excite me. I fix and improve, finding joy. Tech world amazes, making me curious.</p>
            <Button text='github' color='pink' link='https://github.com/MAGHPMallawaarachchi'></Button>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default MyPassion