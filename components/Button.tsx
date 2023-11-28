import Link from 'next/link';
import React from 'react';

type Props = {
  text: string;
  color: string;
  link: string;
};

const Button = ({ text, color, link }: Props) => {
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <Link href={link}>
      <button
        className="uppercase text-dark sm:text-base text-sm font-bold leading-none border-2 border-dark rounded-full sm:w-[180px] w-[120px] py-2"
        style={buttonStyle}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
