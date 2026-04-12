import { useState } from "react"


const Batsman = () => {

    const [totalRuns, setTotalRuns] = useState(0)

    const handleSingle = ()=>{
        const runs= totalRuns + 1;
        setTotalRuns(runs)
    }

    const handleFour = ()=>{
        const runs= totalRuns + 4;
        setTotalRuns(runs)
    }

    const handleSix = ()=>{
        const runs= totalRuns + 6;
        setTotalRuns(runs)
    }

    return (
    <div>
      <h2>Total Runs: {totalRuns}</h2>
      <div>
        <p><button onClick={handleSingle}>single</button></p>
        <p><button onClick={handleFour}>Four</button></p>
        <p><button onClick={handleSix}>Six</button></p>
      </div>
    </div>
  )
}

export default Batsman
