import React from 'react'

const MyPassion = () => {
  return (
    <section className='mx-auto flex justify-center items-center overflow-hidden dark:bg-gray bg-light-blue sm:rounded-[80px] rounded-[50px]'>

        <div className='max-w-7xl paddings flex lg:flex-row flex-col items-center lg:w-full sm:w-[80%] w-full justify-between lg:gap-2 gap-[60px]'>

            <div className='lg:w-[500px] w-full aspect-[4/3] bg-pink'></div>

            <div className='flex flex-col lg:justify-between lg:w-[40%] lg:h-[360px] lg:gap-0 gap-8'>

                <div>
                    <h2 className='dark:text-light text-dark sm:text-[30px] text-[20px] uppercase leading-none font-bold'>Coding is</h2>
                    <h1 className='heading'>My Passion</h1>
                </div>

                <p className='paragraph'>I love coding. I create solutions using code, making ideas real. Challenges excite me. I fix and improve, finding joy. Tech world amazes, making me curious.</p>

                <button className='button-text button bg-pink xsm:w-36 w-28 xsm:py-1 py-2'>Github</button>

            </div>

        </div>

    </section>
  )
}

export default MyPassion