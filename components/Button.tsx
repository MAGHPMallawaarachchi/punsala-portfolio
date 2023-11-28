import Link from 'next/link';
import React from 'react';

type Props = {
  text: string;
  color: string;
  link: string;
};

const Button = ({ text, color, link }: Props) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <button
        className={`uppercase text-dark sm:text-base text-sm font-bold leading-none border-2 border-dark rounded-full sm:w-[160px] w-[120px] py-[5px] hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all duration-200 ${
          color === 'blue'
          ? 'bg-blue'
          : color === 'green'
            ? 'bg-green'
            : 'bg-pink'
        }`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
