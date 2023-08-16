import React from 'react'

type Props = {
  height: number
  width: number
}

const Menu = ({height, width}:Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 286 254" xmlns="http://www.w3.org/2000/svg" className='dark:fill-light dark:stroke-light stroke-dark fill-dark'>
        <path d="M0 0H285.75V31.75H0V0ZM0 111.125H190.5V142.875H0V111.125ZM0 222.25H285.75V254H0V222.25Z"/>
    </svg>

  )
}

export default Menu