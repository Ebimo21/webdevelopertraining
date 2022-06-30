import React from 'react'
import NavBar from './NavBar'

const Header = ({className}) => {
  return (
    <header className={className}>
        <NavBar className={`xl:flex xl:justify-between xl:relative  `}>

        </NavBar>
    </header>
  )
}

export default Header