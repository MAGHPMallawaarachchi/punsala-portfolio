import React from 'react';

type Props = {
  text: string;
  onClick: any;
  active: boolean;
}

const FilterButton = ({ text, onClick, active }: Props) => {
  return (
    <button
      className={`uppercase  sm:text-base xsm:text-sm text-xs font-bold leading-none border-2 border-dark dark:border-light rounded-full sm:w-[160px] xsm:w-[100px] w-[95px] py-[5px] hover:dark:bg-light hover:dark:text-dark hover:text-light hover:bg-dark ${
        active
          ? 'dark:bg-light dark:text-dark bg-dark text-light'
          : 'text-dark dark:text-light'
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default FilterButton;
