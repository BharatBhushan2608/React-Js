import React , { useState} from 'react'

const App = () => {

  //{user:'bharat' , age:22}

    const [num, setNum] = useState(10)

    const btnClicked = () => {
      // console.log(num)
      //   setNum(30)
      // console.log(num)

      // Object is reference type

    //   const newNum =  {...num};  // spread operator
    //   newNum.user='Bhushan'
    //   newNum.age=25
    //   setNum(newNum)

    // Array is reference type

      // const newNum = [...num];  // spread operator
      // newNum.push(50)
      // setNum(newNum)

      //Batch Update

      setNum(prev => prev + 1)
      setNum(prev => prev + 1)
      setNum(prev => prev + 1)
      // after doing this the intial value will be increased by 3 
      // example inatial value is 10 after clicking it will become 13 then 16 and so on
      
    } 


  return (
    <div>
      {/* <h1>{num.user} , {num.age}</h1> */}
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click Me</button>
    </div>
  )
}

export default App
 