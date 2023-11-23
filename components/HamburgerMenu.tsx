import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constants';
import { ThemeSwitcher } from './ThemeSwitcher';
import {AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineClose} from 'react-icons/ai'

type Props = {
    onClose: () => void;
}

const HamburgerMenu = ({ onClose }:Props) => {

    useEffect(() => {
        // Disable scrolling when the hamburger menu is open
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

  return (
    <div className="lg:hidden flex flex-col justify-between fixed top-0 left-0 w-full h-screen dark:bg-black bg-white bg-opacity-95 px-8 py-5">
        <div className='flex items-center justify-between'>
            <Link href='/'>
                <Image
                    src='/images/Logo.svg'
                    alt='logo'
                    width={113}
                    height={25}
                />
            </Link>
            <button className='lg:hidden' onClick={onClose}>
                <AiOutlineClose size="28px" color="#ffffff" />
            </button>
        </div>
        <ul className='flex flex-col items-center gap-10'>
            {NavLinks.map((link) => (
                <button className='navbar-button' onClick={onClose}>
                    <Link href={link.href} key={link.key} className='px-[15px] py-[6px] navbar-items'>
                        {link.text}
                    </Link>
                </button>
            ))}
        </ul>
        <div className='flex justify-between mb-14'>
            <div className='flex gap-4'>
                <a href="https://www.instagram.com/punsalaa_/" key="Instagram" target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram size="28px" color="#38B8FF"/>
                </a>
                <a href="https://www.linkedin.com/in/punsala/" key="Linkedin" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin size="28px" color="#38B8FF"/>
                </a>
                <a href="https://github.com/MAGHPMallawaarachchi" key="Github" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub size="28px" color="#38B8FF"/>
                </a>  
            </div>
            <ThemeSwitcher/>
        </div>
    </div>
  );
}

export default HamburgerMenu;
