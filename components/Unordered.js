import React from 'react'

const Unordered = ({className, children}) => {
  return (
    <ul className={className}>
        {children}
    </ul>
  )
}

export default Unordered