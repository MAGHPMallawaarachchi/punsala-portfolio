import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { NavLinks } from '@/constants';
import { ThemeSwitcher } from './ThemeSwitcher';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiOutlineClose } from 'react-icons/ai';
import AnimationWrapper from './AnimationWrapper';

type Props = {
  onClose: () => void;
};

const HamburgerMenu = ({ onClose }: Props) => {
  const controls = useAnimation();

  useEffect(() => {
    // Disable scrolling when the hamburger menu is open
    document.body.style.overflow = 'hidden';
    controls.start({ x: 10 });
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [controls]);

  const closeMenu = async () => {
    await controls.start({ x: '100%' });
    onClose();
  };

  return (
    <motion.div
      className="lg:hidden flex flex-col justify-between fixed top-0 right-0 w-[80%] h-screen dark:bg-black bg-white bg-opacity-90 px-8 py-5 rounded-l-3xl"
      initial={{ x: '100%' }}
      animate={controls}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image src="/images/Logo.svg" alt="logo" width={113} height={25} />
        </Link>
        <button className="lg:hidden" onClick={closeMenu}>
          <AiOutlineClose size="28px" className="dark:fill-light fill-dark" />
        </button>
      </div>
      <ul className="flex flex-col items-center gap-10">
        {NavLinks.map((link, key) => (
          <AnimationWrapper delay={key * 0.1} key={key}>
            <button className="navbar-button" onClick={closeMenu} key={key}>
                <Link href={link.href} key={link.key} className="px-[15px] py-[6px] navbar-items font-medium">
                {link.text}
                </Link>
            </button>
          </AnimationWrapper>
        ))}
      </ul>
      <div className="flex justify-between mb-14">
        <div className="flex gap-4">
          <a href="https://www.instagram.com/punsalaa_/" key="Instagram" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram size="28px" color="#38B8FF" />
          </a>
          <a href="https://www.linkedin.com/in/punsala/" key="Linkedin" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size="28px" color="#38B8FF" />
          </a>
          <a href="https://github.com/MAGHPMallawaarachchi" key="Github" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size="28px" color="#38B8FF" />
          </a>
        </div>
        <ThemeSwitcher />
      </div>
    </motion.div>
  );
};

export default HamburgerMenu;
