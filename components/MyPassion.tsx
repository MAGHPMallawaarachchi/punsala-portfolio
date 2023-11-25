import React from 'react'
import Container from './Container'

const MyPassion = () => {
  return (
    <section className=' dark:bg-gray bg-light-blue sm:rounded-[80px] rounded-[50px]'>
      <Container>
        <div className='flex lg:flex-row flex-col justify-between items-center overflow-hidden gap-10'>
          <div className='lg:w-[50%] w-full aspect-[6/3] bg-pink lg:h-full rounded-2xl'></div>

          <div className='flex flex-col lg:w-[450px] gap-6'>
            <div className='gap-2'>
              <h2 className='dark:text-light text-dark sm:text-2xl text-xl uppercase leading-none font-semibold'>Coding is</h2>
              <h1 className='heading'>My Passion</h1>
            </div>

            <p className='paragraph'>I love coding. I create solutions using code, making ideas real. Challenges excite me. I fix and improve, finding joy. Tech world amazes, making me curious.</p>
            <button className='button-text button bg-pink xsm:w-36 w-28 xsm:py-1 py-2'>Github</button>  

          </div>

        </div>
      </Container>
    </section>
  )
}

export default MyPassion