import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  console.log(props) 
  return (
    <div className=' flex items-center gap-10  py-0 px-10 h-[80vh] '>
        <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
