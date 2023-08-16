"use client"

import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Menu from './icons/Menu'
import Instagram from './icons/Instagram'
import Linkedin from './icons/Linkedin'
import { ThemeSwitcher } from './ThemeSwitcher'
import Github from './icons/Github'
import HamburgerMenu from './HamburgerMenu'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
            <nav className='flex items-center justify-between w-full py-5 px-8 fixed top-0 z-50 bg-color shadow-sm '>
                <Link href='/'>
                    <Image
                        src='/images/Logo.svg'
                        alt='logo'
                        width={160}
                        height={30}
                    />
                </Link>

                <ul className='hidden laptop:flex gap-[10px]'>
                    {NavLinks.map((link) => (
                        <button className='navbar-button'>
                            <Link href={link.href} key={link.key} className='px-[15px] py-[6px] navbar-items'>
                                {link.text}
                            </Link>
                        </button>
                    ))}
                </ul>

                <button className='laptop:hidden' onClick={toggleMenu}>
                    <Menu height={18} width={20} />
                </button>

                {isMenuOpen && <HamburgerMenu onClose={toggleMenu} />}

                <div className='hidden laptop:flex flex-row gap-[15px] items-center'>
                    <a href="https://www.instagram.com/punsalaa_/" key="Instagram" target="_blank" rel="noopener noreferrer">
                        <Instagram />
                    </a>
                    <a href="https://www.linkedin.com/in/punsala/" key="Linkedin" target="_blank" rel="noopener noreferrer">
                        <Linkedin />
                    </a>
                    <a href="https://github.com/MAGHPMallawaarachchi" key="Github" target="_blank" rel="noopener noreferrer">
                        <Github />
                    </a>

                    <ThemeSwitcher />
                </div>
            </nav>
    )
}

export default Navbar
