import React from 'react'

const Txt18 = ({className, text}) => {
  return (
   <p className={`text-sm md:text-[17px] lg:text-[18px] ${className}`}>{text}</p>
  )
}

export default Txt18