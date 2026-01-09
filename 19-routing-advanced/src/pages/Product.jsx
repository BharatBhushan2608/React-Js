import React from 'react'
import { Link, Outlet } from 'react-router-dom'
 

const Product = () => {
  return (
    <div>
      <div className=' flex justify-center gap-10 text-xl font-semibold py-4'>
        <Link to='/product/mens'>Men's</Link>
        <Link to='/product/womens'>Women's</Link>
        <Link to='/product/kids'>Kid's</Link>

        <Outlet />
      </div>
    </div>

    
  )
}

export default Product