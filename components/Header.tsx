import NavBar from './NavBar'
import React, { ReactNode } from 'react'

type Props = {
    className?: string,
    children?: ReactNode,
  }
const Header = ({className}:Props) => {
  return (
    <header className={className}>
        <NavBar className={`xl:flex xl:justify-between xl:relative  `}>

        </NavBar>
    </header>
  )
}

export default Header