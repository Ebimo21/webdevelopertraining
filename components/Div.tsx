import React, { ReactNode } from 'react'

type Props = {
    className?: string,
    children?: ReactNode
  }

const Div = ({children, className}:Props) => {
  return (
    <div className={className}> 
        {children}
    </div>
  )
}

export default Div