import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar2 = () => {

     let navigate  = useNavigate();

  return (
    <div className='bg-blue-300 flex px-6 py-3 '>
        <button 
       onClick={()=>{
        navigate('/')
       }}
      className='bg-green-700 rounded p-2 cursor-pointer active:scale-95 m-2'>
      Return To Home Page
      </button>

      <button 
      onClick={()=>{
        navigate(-1)
      }}
      className='bg-green-700 rounded p-2 cursor-pointer active:scale-95 m-2'>
      Go Back
      </button>

      <button 
      onClick={()=>{
        navigate(+1)
      }}
      className='bg-green-700 rounded p-2 cursor-pointer active:scale-95 m-2'>
      Next
      </button>
    </div>
  )
}

export default Navbar2