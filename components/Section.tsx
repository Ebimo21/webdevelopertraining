import React, {ReactNode} from 'react'

type Props = {
  className?: string,
  children?: ReactNode
}

const Section = ({className, children}:Props) => {
  return (
    <section className={className}>
        {children}
    </section>
  )
}

export default Section