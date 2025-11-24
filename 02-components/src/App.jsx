import React from 'react'
import Card from "./components/Card";
import Navbar from './components/Navbar';

const App = () => {

 
  return (
    <div>
      <Navbar />
      {Navbar ()}
      { Card()}  {/*to print card*/}
      < Card/>  {/*same it also print card*/}
      

       

    </div>
     
  )
}

export default App
