"use client"

import { IoMailSharp } from "react-icons/io5";
import { motion } from 'framer-motion';
import { LuSparkle } from 'react-icons/lu';
import { FormEvent, useState } from "react";
import { sendContactForm } from "@/lib/api";

interface Values {
    name: string;
    email: string;
    message: string;
}
  
const initValues: Values = {
    name: '',
    email: '',
    message: '',
};
  
const initState = {
    values: initValues,
    isLoading: false,
};

const ContactForm = () => {    

    const [state, setState] = useState(initState);

    const { values, isLoading } = state;

    const handleChange = ({target}:any) => setState((prev)=>({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value,
        },
    }));

    const onSubmit = async (event: any) => {
        event.preventDefault();

        if (!values.name || !values.email || !values.message) {
            window.alert('Please fill in all the required fields');
            return;
        }

        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        try {
            await sendContactForm(values);
            setState(initState);
            window.alert('Message sent successfully!');
        } catch (error: any) {
            window.alert(`Error: ${error.message}`);

            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
        }
    }

    return(
        <div className='dark:bg-gray bg-light-blue border-2 border-dark w-full 3xl:rounded-[50px] rounded-[30px] flex lg:flex-row flex-col justify-between lg:p-16 p-8 lg:gap-20 gap-10 lg:mx-10 mx-5 my-20'>
            <div className='flex flex-col items-start lg:w-[42%] 3xl:gap-8 gap-4'>

                <div className='flex flex-col items-start'>
                    <h2 className='dark:text-light text-dark sm:text-3xl text-xl leading-none font-medium'>Got an idea?</h2>
                    <div className='flex'>
                        <h1 className='dark:text-light text-dark sm:text-[80px] text-[50px] sm:tracking-[4px] tracking-[3px] leading-none'>Let's</h1>
                        <motion.div 
                            className='sm:flex hidden'
                            initial={{
                                rotate: 5,
                            }}
                            animate={{
                                rotate: -5,
                            }}
                            transition={{
                                type: 'tween',
                                ease: 'easeInOut',
                                repeat: Infinity,
                                repeatType: 'reverse',
                                duration: 0.5,
                            }}
                        >
                            <LuSparkle size="72px" className="fill-blue stroke-[0.6px] stroke-dark" color="#38B8FF"/>
                        </motion.div>
                        <motion.div 
                            className='flex sm:hidden'
                            initial={{
                                rotate: 5,
                            }}
                            animate={{
                                rotate: -5,
                            }}
                            transition={{
                                type: 'tween',
                                ease: 'easeInOut',
                                repeat: Infinity,
                                repeatType: 'reverse',
                                duration: 0.5,
                            }}
                        >
                            <LuSparkle size="52px" className="fill-blue stroke-[0.6px] stroke-dark" color="#38B8FF"/>
                        </motion.div>
                    </div>
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
                            value={values.name} 
                            onChange={handleChange}
                            required={!values.name}
                            className='bg-light 3xl:rounded-2xl rounded-xl 3xl:h-14 h-10 3xl:text-lg text-sm text-dark font-medium px-3 appearance-none border-2 border-dark focus:outline-none' 
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor='email' className='uppercase dark:text-light text-dark font-semibold 3xl:text-lg text-sm'>Email</label>
                        <input 
                            type='email' 
                            name='email' 
                            id='email' 
                            value={values.email}
                            onChange={handleChange}
                            required={!values.email}
                            className='bg-light 3xl:rounded-2xl rounded-xl 3xl:h-14 h-10 3xl:text-lg text-sm text-dark font-medium px-3 appearance-none border-2 border-dark focus:outline-none' 
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor='message' className='uppercase dark:text-light text-dark font-semibold 3xl:text-lg text-sm'>Message</label>
                        <textarea 
                            name='message' 
                            id='message' 
                            value={values.message}
                            onChange={handleChange}
                            rows={4}
                            required={!values.message}
                            className='bg-light 3xl:rounded-2xl rounded-xl 3xl:h-48 h-24 3xl:text-lg text-sm text-dark font-medium px-3 py-4 border-2 border-dark appearance-none focus:outline-none' 
                        />
                    </div>

                    {isLoading ? (
                        <button
                            className="bg-pink uppercase text-dark sm:text-base text-sm font-bold leading-none border-2 border-dark rounded-full sm:w-[160px] w-[120px] py-[5px] hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all duration-200"
                        >
                            Sending...
                        </button>
                        ) : (
                        <button
                            className="bg-pink uppercase text-dark sm:text-base text-sm font-bold leading-none border-2 border-dark rounded-full sm:w-[160px] w-[120px] py-[5px] hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all duration-200"
                            onClick={(event) => onSubmit(event)}
                        >
                            Send
                        </button>
                    )}

                </form>
            </div>
        </div>
    );
};

export default ContactForm;