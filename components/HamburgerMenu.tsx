import React, { useEffect } from 'react';
import Close from './icons/Close';
import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constants';
import Instagram from './icons/Instagram';
import Linkedin from './icons/Linkedin';
import Github from './icons/Github';
import { ThemeSwitcher } from './ThemeSwitcher';

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
    <div className="laptop:hidden flex flex-col justify-between fixed top-0 left-0 w-full h-screen dark:bg-black bg-white bg-opacity-95 px-8 py-5">
        <div className='flex items-center justify-between'>
            <Link href='/'>
                <Image
                    src='/images/Logo.svg'
                    alt='logo'
                    width={113}
                    height={25}
                />
            </Link>
            <button className='laptop:hidden' onClick={onClose}>
                <Close height={18} />
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
        <div className='flex justify-between'>
            <div className='flex gap-4'>
                <a href="https://www.instagram.com/punsalaa_/" key="Instagram" target="_blank" rel="noopener noreferrer">
                    <Instagram/>
                </a>
                <a href="https://www.linkedin.com/in/punsala/" key="Linkedin" target="_blank" rel="noopener noreferrer">
                    <Linkedin/>
                </a>
                <a href="https://github.com/MAGHPMallawaarachchi" key="Github" target="_blank" rel="noopener noreferrer">
                    <Github/>
                </a>  
            </div>
            <ThemeSwitcher/>
        </div>
    </div>
  );
}

export default HamburgerMenu;
