import React, { useState } from 'react'

const App = () => {

  // const [ num, setNum] = useState(10)
  // const [username, setUsername] = useState("Bharat")
  // const [arr, setArr] = useState([1,2,3,4,5])

  //  function  chngNumber() {
  //   setNum(30)
  //   setUsername("Bhushan")
  //   setArr([6,4,3,2,1])
  //  }

  const [num, setNum] = useState(0)

  function numIncreasing(params) {
    setNum(num + 1)
  }
  function numDecreasing(params) {
    setNum(num - 1)
  }
  function  IncreaseByFive(params) {
    setNum(num + 5)
  }

   
  return (
    <div className='container'  >
      {/* <h1>value of num is {num} <br /> and name of the user {username} <br /> and the value of array {arr}  </h1>
      <button onClick={chngNumber}>click</button> */}


       
        <h1>{num}</h1>
        <button onClick={numIncreasing} >Increasing</button>
        <button onClick={numDecreasing} >Decreasing</button>
        <button onClick={IncreaseByFive} >Increase By 5 </button>

    </div>
  )
}

export default App
 