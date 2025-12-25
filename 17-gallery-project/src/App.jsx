import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userdata, setUserdata] = useState([]);

  const [index, setIndex] = useState(1)

  const getdata = async () => {
    const response = await axios.get(
       `https://picsum.photos/v2/list?page=${index}&limit=12`
    );
    setUserdata(response.data);
  };

  useEffect(function(){ 
    getdata();
  },[index])

  let printUserdata =  <h3 className="   text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h3>

  if (userdata.length > 0) {
    printUserdata = userdata.map(function (elem, idx) { 
      return (
        <div className="m-4" key={idx}>
          <Card elem={elem} />    
        </div>
      );
    });
  }
  return (
    <div className="bg-black h-screen overflow-auto text-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex flex-wrap overflow-hidden  ">
        {printUserdata}
      </div>

        <div className=" flex justify-center items-center p-4 gap-5.5 mb-10 ">
          <button 
          className=" bg-amber-300 text-black rounded px-6 py-3 font-bold cursor-pointer active:scale-95"
          onClick={()=>{
            
              if(index > 1){
                setIndex(index - 1)
                setUserdata([])
              }
          }}>
          Prev
          </button>
          <h3>Page No :- {index}</h3>
          <button 
          className=" bg-amber-300 text-black rounded px-6 py-3 font-bold cursor-pointer active:scale-95"
          onClick={()=>{
             setIndex(index + 1)
             setUserdata([])
          }}>
          Next
          </button>
        </div>
      
    </div>
  );
};

export default App;
