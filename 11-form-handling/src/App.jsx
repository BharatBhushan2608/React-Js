import React from 'react'

const App = () => {

  const fromHandle = (e) =>{
    e.preventDefault(); // Prevents the default form submission behavior (prevent atumatic page reload)
    console.log("Form submitted");
  }
  return (
    <div>
       <form onSubmit={ (e) => {
        fromHandle(e)
       }}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
       </form>
    </div>
  )
}

export default App
