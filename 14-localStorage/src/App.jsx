import React from 'react'

const App = () => {

//How to add data to localStorage and how to get data from localStorage
// localStorage - it is a inbuilt object which is used to store data in the browser
  
 localStorage.setItem('user' , 'Bharat')
 localStorage.setItem('age' , '23')

 const user = localStorage.getItem('user')
 const age= localStorage.getItem('age')
 //console.log(user,age)

 // How to remove data from localStorage
 localStorage.removeItem('age')
 localStorage.removeItem('user')


 // how store object in localStorage

  const person = {
    name: "Bharat",
    age:23,
    City:"Bihar"
  }

  // we cannot store object directly in localStorage we have to convert it into string using JSON.stringify
  localStorage.setItem('person' , JSON.stringify(person))
  
  // how to get object from localStorage(it give result in string from  )
  const getPersondata = localStorage.getItem('person')
  //console.log(getPersondata) 

  // we have to convert it back to object using JSON.parse
  const getPersonObj =  JSON.parse(getPersondata)
  console.log(getPersonObj) 






  return (
    <div>App</div>
  )
}

export default App