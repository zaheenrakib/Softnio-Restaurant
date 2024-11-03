import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-center items-center'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
    </nav>
    </>
  )
}

export default Navbar