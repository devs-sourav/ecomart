import React from 'react'

const Containar = ({children,className}) => {
  return (
    <div className={`max-w-6xl px-4 mx-auto ${className}`}>{children}</div>
  )
}

export default Containar