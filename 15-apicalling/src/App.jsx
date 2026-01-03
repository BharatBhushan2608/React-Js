import axios from 'axios'
import  { useState } from 'react'

//  api se data ko kaise call karte hai react me

const App = () => {

const [data, setData] = useState([])

    // api calling using fetch and async await

          // const getData = async () => {
          //   const response = await fetch('https://jsonplaceholder.typicode.com/todos')
          //   const data = await response.json()
          //   console.log(data)
          // }

    // api calling using axios and async await 

    const getData = async () => {

      // 1st way 
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      console.log(response.data)
      setData(response.data)

      // 2nd way (both are same )
      // const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
      // console.log(data)
    }
    
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem ,idx){
          return <h3>Hello  {idx} {elem.title} </h3>
        })}
      </div>
    </div>
  )
}

export default App   