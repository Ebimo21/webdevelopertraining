import Image from 'next/image'
import Link from 'next/link'
import Div from './Div'
import React, { ReactNode } from 'react'

type Props = {
    className?: string,
    children?: ReactNode
  }

const NavBar = ({ className}:Props) => {
  return (
    <nav className={className}>
        <Link href={'/'}>
          <a>
          <Div className={`xl:flex xl:justify-center xl:items-center`} >
            <div className={`xl:w-[50px] xl:h-[30px] xl:relative sm:w-[45px] sm:h-[25px] `}>
              <Image src={`/images/logo.png`}  layout={`fill`} objectFit={`contain`} alt={`logo`} />
            </div>
            <span>the<strong>Enthusiast</strong></span>
          </Div>
          </a>
        </Link>

        <Div>
          <Link href={`#register`}>
            <button className={`btn btn-sm`}>Register</button>
          </Link>
        </Div>        
    </nav>
  )
}

export default NavBar