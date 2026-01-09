import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-6 py-6 bg-cyan-600'> 
      <h2  className='flex justify-center item-center text-2xl font-bold'>Bharat</h2>
      <div className=' flex gap-5 text-md font-semibold'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/courses'>Courses</Link>
        <Link to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar