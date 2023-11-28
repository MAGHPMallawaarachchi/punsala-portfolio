import Link from 'next/link';
import React from 'react';

const FilterButton = ({ text}:{text:string}) => {
  return (

      <button
        className="uppercase text-dark dark:text-light sm:text-base xsm:text-sm text-xs font-bold leading-none border-2 border-dark dark:border-light rounded-full sm:w-[160px] xsm:w-[100px] w-[95px] py-[5px]"
      >
        {text}
      </button>
  );
};

export default FilterButton;
