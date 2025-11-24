import React from 'react'

    const user = "Bharat"
    const age = 23

const Card = () => {
  return (
    <div>
      <div className='card'>
        <h1>Bharat Bhushan</h1>
        <h2>I am {user} and i am {age} year old</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore minima soluta culpa eligendi qui reiciendis amet facilis architecto et.</p>
      </div>
    </div>
  )
}

export default Card

