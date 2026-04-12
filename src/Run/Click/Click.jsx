import { useState } from "react"

const Click = () => {

    const [click,setClck]=useState(0);
    
    const handleMinus=()=>{
        const minus=click-1;
        setClck(minus)
    }
  return (
    <div>
        <button onClick={handleMinus}>-</button>
      <h1>Total: {click}</h1>
      <button onClick={()=>setClck(click+1)}>+</button>
    </div>
  )
}

export default Click
