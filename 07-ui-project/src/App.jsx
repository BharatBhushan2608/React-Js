import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
 
const App = () => {

  const users = 
  [
    {
      img:'https://i.pinimg.com/1200x/f7/bf/bd/f7bfbd2790aac0718e9f4ce075f876e7.jpg',
      intro:'Perfection is not attainable. But if we chase perfection we can catch excellence.',
      tag:'Satisfied',
      color:'orange'
    },
    {
      img:'https://i.pinimg.com/736x/6f/2e/13/6f2e13efa2bbdaf318967ece2314ee6f.jpg',
      intro:'Do not stop thinking of life as an adventure. You have no security unless you can live bravely, excitingly, imaginatively; unless you can choose a challenge instead of competence.',
      tag:'Underserved',
      color:'blue'
    },
    {
      img:'https://i.pinimg.com/736x/82/28/84/82288486b5da113403ded5a4f886fc63.jpg',
      intro:'Success is not final; failure is not fatal: It is the courage to continue that counts. ',
      tag:'UnderBanked',
      color:'brown'
    },
    {
      img:'https://i.pinimg.com/736x/ef/97/25/ef972507d073f998e8091814528e86d1.jpg',
      intro:' There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.',
      tag:'Unsatisfied',
      color:'black'
    }
  
  ]

  return (
    <div> 
      <Section1  users={users}/>
      <Section2 />
    </div>
  )
}

export default App
