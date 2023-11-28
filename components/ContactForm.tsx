import React from 'react';
import { IoMailSharp } from "react-icons/io5";

const ContactForm = () => {
    return(
        <div className='dark:bg-gray bg-light-blue border-2 border-dark w-full 3xl:rounded-[50px] rounded-[30px] flex lg:flex-row flex-col justify-between lg:p-16 p-8 lg:gap-20 gap-10 lg:mx-10 mx-5 my-20'>
            <div className='flex flex-col items-start lg:w-[42%] 3xl:gap-8 gap-4'>

                <div className='flex flex-col items-start'>
                    <h2 className='dark:text-light text-dark sm:text-3xl text-xl leading-none font-medium'>Got an idea?</h2>
                    <h1 className='dark:text-light text-dark sm:text-[80px] text-[50px] sm:tracking-[4px] tracking-[3px] leading-none'>Let's</h1>
                    <h1 className='dark:text-light text-dark sm:text-[80px] text-[50px] sm:tracking-[4px] tracking-[3px] leading-none'>Collaborate</h1>
                </div>

                <p className='3xl:text-xl text-base dark:text-secondary-text text-dark text-left font-medium'>You can fill out the form below and I will get back to you so we can discuss your project in more detail. Looking forward to connecting with you!</p>

                <IoMailSharp size="24px" className="dark:fill-pink fill-dark"/>
            </div>

            <div className='flex items-start justify-around lg:w-[58%]'>

                <form className='w-full flex flex-col 3xl:gap-8 gap-4'>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor='name' className='uppercase dark:text-light text-dark font-semibold 3xl:text-lg text-sm'>your name</label>
                        <input 
                            type='text' 
                            name='name' 
                            id='name' 
                            className='bg-light 3xl:rounded-2xl rounded-xl 3xl:h-14 h-10 3xl:text-lg text-sm text-dark font-medium px-3 appearance-none border-2 border-dark focus:outline-none' 
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor='email' className='uppercase dark:text-light text-dark font-semibold 3xl:text-lg text-sm'>Email</label>
                        <input 
                            type='email' 
                            name='email' 
                            id='email' 
                            className='bg-light 3xl:rounded-2xl rounded-xl 3xl:h-14 h-10 3xl:text-lg text-sm text-dark font-medium px-3 appearance-none border-2 border-dark focus:outline-none' 
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor='message' className='uppercase dark:text-light text-dark font-semibold 3xl:text-lg text-sm'>Message</label>
                        <textarea 
                            name='message' 
                            id='message' 
                            className='bg-light 3xl:rounded-2xl rounded-xl 3xl:h-48 h-24 3xl:text-lg text-sm text-dark font-medium px-3 py-4 border-2 border-dark appearance-none focus:outline-none' 
                        />
                    </div>

                    <button className="bg-pink uppercase text-dark sm:text-base text-sm font-bold leading-none border-2 border-dark rounded-full sm:w-[160px] w-[120px] py-[5px]">
                        send
                    </button>

                </form>
            </div>
        </div>
    );
};

export default ContactForm;