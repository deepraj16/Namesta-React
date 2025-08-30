import { useState } from "react";
import AddWorking from "./components/to_add"; // optional if in another file

function App() {
  const [showComponent, setShowComponent] = useState(false);
  const [count , setCount ] = useState(0)
  const handleClick = () => {
    console.log(showComponent)
    if(!showComponent){
    setShowComponent(true);
    }
    else{
      setShowComponent(false);
    }
  

  };

  const add =()=>{
    setCount(count +1);
  }
  const sub =() =>{
    setCount(count -1);
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      

        <div className="space-y-4">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            <p className="font-semibold">Success!</p>
            <p className="text-sm">
              Your Tailwind CSS is properly configured.
            </p>
          </div>

          <button
            onClick={handleClick}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105"
          >
            Click me!
          </button>

          {showComponent && <AddWorking />}

          <h1>{count}</h1>
          <button onClick={add}>add</button>
           <button onClick={sub}>sub</button>
        </div>
      </div>
   
  );
}

export default App;
