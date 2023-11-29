import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  text: string;
  color: string;
  link: string;
};

const Button = ({ text, color, link }: Props) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.4 }}
      >
        <button
          className={`uppercase text-dark sm:text-base text-xs font-bold leading-none border-2 border-dark rounded-full sm:w-[160px] w-[120px] py-[5px] hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all duration-200 ${
            color === 'blue'
            ? 'bg-blue'
            : color === 'green'
              ? 'bg-green'
              : 'bg-pink'
          }`}
        >
          {text}
        </button>
      </motion.div>
    </Link>
  );
};

export default Button;
