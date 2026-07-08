import React from 'react'

const Txt14 = ({className, text}) => {
  return (
    <>
      <p className={`text-xs md:text-xs lg:text-sm ${className}`}>{text}</p>
    </>
  )
}

export default Txt14