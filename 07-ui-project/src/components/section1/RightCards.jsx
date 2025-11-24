import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent'

const RightCards = (props) => {
  return (
    <div   className=' h-full w-70 shrink-0 overflow-hidden relative rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />

       <RightCardContent id={props.id} tag={props.tag} intro={props.intro} color={props.color} />
    </div>
  )
}

export default RightCards
