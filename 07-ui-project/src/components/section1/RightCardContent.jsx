import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h1 className='bg-white flex items-center justify-center h-12 w-12 p-2 rounded-full font-bold text-xl'>{props.id+1}</h1>
        <div>
            <p className='text-white text-shadow-lg/30 leading-relaxed font-medium mb-14'>{props.intro}</p>

            <div className='flex flex-row justify-between'>
                <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className=' text-white font-medium px-3 py-2 rounded-full'>
                    <i className="ri-arrow-right-line"></i>
                    </button>
            </div>


        </div>
        


      </div>
  )
}

export default RightCardContent
