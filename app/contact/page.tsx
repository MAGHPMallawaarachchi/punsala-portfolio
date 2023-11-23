import ContactForm from '@/components/ContactForm'
import React from 'react';

export default function Contact(){
    return(
        <section className='mx-auto max-w-7xl flex justify-center items-center h-screen py-40'>
            <ContactForm />
        </section>
    );
}