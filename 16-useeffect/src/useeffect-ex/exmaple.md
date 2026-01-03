example to understand useeffect 

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [ num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

  useEffect(function () {
    console.log('use effect is running ')

  },[num])
  return (
    <div>
        <h1>Num {num}</h1>
        <h1> Num2 {num2}</h1>
        <button onMouseEnter={function  ( ) {
          setNum(num+1)
        }}
        onMouseLeave={function(){
          setNum2(num2 + 10)
        }}
        >click</button>
    </div>
  )
}

export default App