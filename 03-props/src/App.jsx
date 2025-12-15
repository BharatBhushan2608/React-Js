import React from 'react'
import Card from "./components/Card";
import img2 from "./assets/sona11.jpeg";
import img1 from "./assets/my photo.jpeg";
 


const App = () => {
  return (
    <div className='parent'>
       <Card user="Bharat " age="22" img={img1} about="He is a web developer and loves coding."/>
       <Card user="Sonakshi" age="23" img={img2} about="She is a designer who enjoys creating beautiful UI."/>
        
    </div>
  )  
}

export default App
