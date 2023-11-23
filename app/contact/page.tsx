import ContactForm from '@/components/ContactForm'
import React from 'react';

export default function Contact(){
    return(
        <section className='mx-auto 3xl:max-w-7xl max-w-5xl flex items-center h-[100%]'>
            <ContactForm />
        </section>
    );
}