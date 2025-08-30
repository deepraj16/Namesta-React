
import Card from "./components/Card.jsx"
import { useState } from "react";
const App=()=>{
  

  const [color , changeColor ]=useState("black");

  return(
   <div className="w-full h-screen duration-200 " style={{backgroundColor: color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      
      <button 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"red"}} onClick={()=>changeColor("red")}>Red</button>
    <button 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"green"}} onClick={()=>changeColor("green")} >green</button>
       <button 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"orange"}} onClick={()=>changeColor("orange")}>orange</button>       
     
       <button 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"blue"}} onClick={()=>changeColor("blue")}>blue</button>
       <button 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"black"}} onClick={()=>changeColor("black")}>black</button>
       <button 
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"pink"}} onClick={()=>changeColor("pink")}>pink</button>
    </div>
   </div>
   </div>
    
  )
}


export default App;