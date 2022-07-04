import React from 'react'
import NavBar from './NavBar'

const Header = ({element, className}) => {
  return (
    <header className={className}>
        <NavBar element={element} className={`xl:flex xl:justify-between xl:relative  `}>

        </NavBar>
    </header>
  )
}

export default Header