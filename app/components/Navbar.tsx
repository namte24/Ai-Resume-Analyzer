import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <nav className='navbar bg-transparent'>
        <Link to="/">
            <p className='text-2xl font-bold text-gradient text-white'>SmartResume</p>
        </Link>
        <Link to="/upload" 
        className='primary-button w-fit'>Upload Resume</Link>
    </nav> 
  )
}

export default Navbar