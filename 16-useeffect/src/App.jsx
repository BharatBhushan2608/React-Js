import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(20)


function aChanhing (){
  console.log('a is changing ')
}

function bchanging (){
  console.log('b is changing')
}

useEffect(()=>{
   aChanhing()
},[a])

useEffect(()=>{
  bchanging()
},[b])

  return (
    <div>
      <h1>A = {a}</h1>
      <h1>B = {b}</h1>
         <button onClick={()=>{
          setA(a+1)
         }}
         >Change A </button>
         <button onClick={()=>{
          setB(b+2)
         }}>Change B</button>
    </div>
  )
}

export default App