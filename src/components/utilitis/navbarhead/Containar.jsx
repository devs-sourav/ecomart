import React from 'react'

const Containar = ({children,className}) => {
  return (
    <div className={`max-w-6xl px-4 md:px-8 lg:px-4 mx-auto ${className}`}>{children}</div>
  )
}

export default Containar