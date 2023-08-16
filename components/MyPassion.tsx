import React from 'react'

const MyPassion = () => {
  return (
    <section className='mx-auto max-w-7xl flex justify-center items-center overflow-hidden paddings dark:bg-gray bg-light-blue tablet:rounded-[80px] rounded-[50px]'>

        <div className='flex laptop:flex-row flex-col items-center laptop:w-full tablet:w-[80%] w-full justify-between laptop:gap-2 gap-[60px]'>

            <div className='laptop:w-[500px] w-full aspect-[4/3] bg-pink'></div>

            <div className='flex flex-col laptop:justify-between laptop:w-[40%] laptop:h-[360px] laptop:gap-0 gap-8'>

                <div>
                    <h2 className='text-color tablet:text-[30px] text-[20px] uppercase leading-none font-bold'>Coding is</h2>
                    <h1 className='heading'>My Passion</h1>
                </div>

                <p className='paragraph'>I love coding. I create solutions using code, making ideas real. Challenges excite me. I fix and improve, finding joy. Tech world amazes, making me curious.</p>

                <button className='button-text button bg-pink w-[177px] mt-3'>Github</button>

            </div>

        </div>

    </section>
  )
}

export default MyPassion