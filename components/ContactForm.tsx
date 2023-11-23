import React from 'react';
import { IoMailSharp } from "react-icons/io5";

const ContactForm = () => {
    return(
        <div className='dark:bg-gray bg-light-blue border-2 border-dark w-full rounded-[50px] mx-10 flex justify-between p-16 gap-20'>
            <div className='flex flex-col items-start w-[42%] gap-8'>

                <div className='flex flex-col items-start gap-4'>
                    <h2 className='uppercase dark:text-light text-dark text-5xl font-semibold'>got an idea?</h2>
                    <h1 className='dark:text-light text-dark text-7xl'>Let's</h1>
                    <h1 className='dark:text-light text-dark text-7xl'>Collaborate</h1>
                </div>

                <p className='text-xl dark:text-light-gray text-dark leading-9 text-left'>You can fill out the form below and I will get back to you so we can discuss your project in more detail. Looking forward to connecting with you!</p>

                <IoMailSharp size="24px" class="dark:fill-pink fill-dark"/>
            </div>

            <div className='flex items-start justify-around w-[58%]'>

                <form className='w-full flex flex-col gap-8'>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor='name' className='uppercase dark:text-light text-dark font-semibold desktop:text-lg text-sm'>your name</label>
                        <input 
                            type='text' 
                            name='name' 
                            id='name' 
                            className='bg-light rounded-2xl h-14 text-lg text-dark font-medium px-3 appearance-none border-2 border-dark focus:outline-none' 
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor='email' className='uppercase dark:text-light text-dark font-semibold desktop:text-lg text-sm'>Email</label>
                        <input 
                            type='email' 
                            name='email' 
                            id='email' 
                            className='bg-light rounded-2xl h-14 text-lg text-dark font-medium px-3 appearance-none border-2 border-dark focus:outline-none' 
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor='message' className='uppercase dark:text-light text-dark font-semibold desktop:text-lg text-sm'>Message</label>
                        <textarea 
                            name='message' 
                            id='message' 
                            className='bg-light rounded-2xl h-48 text-lg text-dark font-medium px-3 py-4 border-2 border-dark appearance-none focus:outline-none' 
                        />
                    </div>

                    <button className='text-dark bg-pink py-2 px-4 rounded-[33px] max-w-[230px] font-bold text-lg uppercase border-dark border-2'>Send</button>

                </form>
            </div>
        </div>
    );
};

export default ContactForm;