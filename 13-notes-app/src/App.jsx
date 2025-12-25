import React from 'react'
import { useState } from 'react'
 
 const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()
    

    // array mein kaise add krn h uske  k liye copy bnao phir push kro
    const CopyTask = [...task];

    CopyTask.push({title, details})

    setTask(CopyTask)
    

    setTitle('')
    setDetails('')

  }

  const deleteNote = (idx) => {
     const CopyTask = [...task];
      CopyTask.splice(idx, 1);
      setTask(CopyTask);

  }
   return (
     <div className='bg-black h-screen w-screen text-white lg:flex   gap-10 '>
        <form onSubmit={ (e) => {
          submitHandler(e)
        }} className='flex flex-col lg:w-1/2  items-start  p-10  gap-5 ' >
          <h1 className='text-3xl font-bold '>Add Notes</h1>
             
              {/* PEHLA INPUT FOR HRADING  */}
              <input 
              type="text" 
              placeholder='Enter Notes Heading '
              className='px-5 py-3 border-2 rounded flex w-full' 
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
              />

              {/* DETAIL WALA INPUT */}
              <textarea
              className='flex px-5 py-3 border-2 rounded h-52 w-full'
              type="text" 
              placeholder='Write Details'
              value={details}
                onChange={(e) => {
                    setDetails(e.target.value)
                }}
              />  

              {/* ADD NOTE BUTTON */}
              <button className='border-2 rounded px-5 py-3 bg-white text-black  font-bold w-full active:scale-95'
              >Add Note
              </button>
        
       </form>
       <div className='p-10  lg:w-1/2  border-l-4'>
        <h1 className='text-3xl font-bold '>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-3 h-full overflow-auto scroll-smooth  '>
           
           {task.map(function(elem,idx){  

            return  <div 
            key={idx} 
            className=' h-52 w-40 rounded-2xl px-3 py-2  text-black 
           bg-cover bg-center 
           overflow-hidden
           flex justify-between flex-col items-center
            bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
              <div>
                <h3 className='text-l mt-1 font-bold leading-tight'>{elem.title}</h3>
              <p className=' font-medium text-xs leading-tight text-gray-500'>{elem.details}</p>
          
              </div>
                <button 
                onClick={() => {
                  deleteNote(idx)
                }}
                className='bg-red-600 w-30 rounded-2xl font-bold cursor-pointer active:scale-95 '>Delete</button>
            
            </div> 

           })}
           
        </div> 
       </div>
     </div>
   )
 }
 
 export default App
 