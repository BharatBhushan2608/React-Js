import React from 'react'
import RightCards from './RightCards'
import { Users } from 'lucide-react'


const RightContent = (props) => {
  console.log(props)  
  return (
    <div id='right' className='h-full w-3/4  p-6 flex flex-nowrap gap-10  overflow-x-auto'>
      
      {props.users.map(function(elem ,idx){
      
      return <RightCards key={idx} id={idx} img={elem.img}  tag={elem.tag} intro={elem.intro} color={elem.color}/>

      })}
        
    </div>
  )
}

export default RightContent
