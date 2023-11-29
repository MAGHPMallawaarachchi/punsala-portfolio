"use client"

import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import HamburgerMenu from './HamburgerMenu'
import {AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineMenu, AiFillMediumCircle} from 'react-icons/ai'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
            <nav className='flex items-center justify-between w-full py-4 sm:px-8 px-6 fixed top-0 z-50 inset-x-0 bg-color shadow-sm '>
                <motion.div
                    initial={{y: -20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.1, type: 'spring', stiffness: 100}}
                >
                    <Link href='/' className='hidden sm:flex'>
                        <Image
                            src='/images/Logo.svg'
                            alt='logo'
                            width={160}
                            height={30}
                        />
                    </Link>
                    <Link href='/' className='sm:hidden flex'>
                        <Image
                            src='/images/Logo.svg'
                            alt='logo'
                            width={113}
                            height={25}
                        />
                    </Link>
                </motion.div>

                <motion.ul 
                    className='hidden lg:flex gap-[10px]'
                    initial={{y: -50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100}}
                >
                    {NavLinks.map((link, key) => (
                        <button key={key} className='hover:border-[2px] hover:border-dark dark:hover:border-light rounded-full w-32'>
                            <Link href={link.href} className='px-[15px] py-[6px] dark:text-light text-dark uppercase text-base dark:font-medium font-semibold'>
                                {link.text}
                            </Link>
                        </button>
                    ))}
                </motion.ul>

                <motion.button 
                    className='lg:hidden' 
                    initial={{y: -50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.3, type: 'spring', stiffness: 100}}
                    onClick={toggleMenu}
                >
                    <AiOutlineMenu size="28px" className="dark:fill-light fill-dark"/>
                </motion.button>

                {isMenuOpen && <HamburgerMenu onClose={toggleMenu} />}

                <motion.div 
                    className='hidden lg:flex flex-row gap-[15px] items-center'
                    initial={{y: -50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.5, type: 'spring', stiffness: 100}}
                >
                    <motion.a href="https://www.instagram.com/punsalaa_/" key="Instagram" target="_blank" rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        style={{imageRendering: "pixelated"}}
                    >
                        <AiFillInstagram size="28px" color="#38B8FF"/>
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/punsala/" key="Linkedin" target="_blank" rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        style={{imageRendering: "pixelated"}}
                    >
                        <AiFillLinkedin size="28px" color="#38B8FF" />
                    </motion.a>
                    <motion.a href="https://github.com/MAGHPMallawaarachchi" key="Github" target="_blank" rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        style={{imageRendering: "pixelated"}}
                    >
                        <AiFillGithub size="28px" color="#38B8FF"/>
                    </motion.a>
                    <motion.a href="https://medium.com/@punsala" key="Medium" target="_blank" rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        style={{imageRendering: "pixelated"}}
                    >
                        <AiFillMediumCircle size="28px" color="#38B8FF"/>
                    </motion.a>
                    <ThemeSwitcher/>
                </motion.div>
            </nav>
    )
}

export default Navbar
