import { type } from 'os'
import React from 'react'

type Props = {
    height: number
}

const Star = ({height}: Props) => {

  return (
    <svg width={height} height={height} viewBox="0 0 254 254" xmlns="http://www.w3.org/2000/svg" className='stroke-black stroke-2 fill-blue'>
        <path d="M86.995 87.3125L127 0L166.688 87.3125L254 127L166.688 167.005L127 254L86.995 167.005L0 127L86.995 87.3125Z"/>
    </svg>

  )
}

export default Star