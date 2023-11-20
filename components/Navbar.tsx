"use client"

import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import HamburgerMenu from './HamburgerMenu'
import {AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
            <nav className='flex items-center justify-between w-full py-5 px-8 fixed top-0 z-50 bg-color shadow-sm '>
                <Link href='/' className='hidden tablet:flex'>
                    <Image
                        src='/images/Logo.svg'
                        alt='logo'
                        width={160}
                        height={30}
                    />
                </Link>
                <Link href='/' className='tablet:hidden flex'>
                    <Image
                        src='/images/Logo.svg'
                        alt='logo'
                        width={113}
                        height={25}
                    />
                </Link>

                <ul className='hidden laptop:flex gap-[10px]'>
                    {NavLinks.map((link) => (
                        <button className='navbar-button w-32'>
                            <Link href={link.href} key={link.key} className='px-[15px] py-[6px] text-color uppercase text-base font-medium'>
                                {link.text}
                            </Link>
                        </button>
                    ))}
                </ul>

                <button className='laptop:hidden' onClick={toggleMenu}>
                    <AiOutlineMenu size="28px" color="#ffffff" />
                </button>

                {isMenuOpen && <HamburgerMenu onClose={toggleMenu} />}

                <div className='hidden laptop:flex flex-row gap-[15px] items-center'>
                    <a href="https://www.instagram.com/punsalaa_/" key="Instagram" target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram size="28px" color="#38B8FF"/>
                    </a>
                    <a href="https://www.linkedin.com/in/punsala/" key="Linkedin" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin size="28px" color="#38B8FF" />
                    </a>
                    <a href="https://github.com/MAGHPMallawaarachchi" key="Github" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub size="28px" color="#38B8FF"/>
                    </a>
                    <ThemeSwitcher/>
                </div>
            </nav>
    )
}

export default Navbar
