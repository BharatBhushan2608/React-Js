import React from 'react'

const App = () => {


  // function  mouseEnter( ) {
  //   console.log("mouse is entred")
  // }

  // function onchanging(val) {
  //   console.log(val)
  // }

  function onwheel(val) {
    // console.log("scroliing " , val)

    if (val > 0) {
      console.log(val ,"Positive value")
    }
    else if( val ===0 ){
      console.log(val, "Zero value")
    }else{
      console.log(val ,"Negative value")
    }

  }


  return (
    <div>
        {/* <button onMouseEnter={mouseEnter}  >click here</button>  
        <button onMouseEnter={mouseEnter}>Another button </button> */}

        {/* you can also pass the function in button  */}

        {/* <button onClick={ () => {
          console.log("i am arrow function")
        }}>click me </button> */}

        {/* <input onClick={function ( ) {
          console.log("ispr click hua")
        }} onChange={onchanging} type="text" placeholder='enter ur name' /> */}

        {/* <input onChange={function (elem) {
           onchanging(elem.target.value)
        }}  type="text" placeholder='enter ur name' /> */}


        {/* <div   onMouseMove={function (elem) {
          console.log(elem)
        }} className='box'> */}



        <div onWheel={function  (elem) {
          onwheel(elem.deltaY)
        }}>
        <div className='page1'></div>
        <div className='page2'></div>
        <div className='page3'></div>
        </div>

        



    </div>
  )
}

export default App
