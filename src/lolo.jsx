import { useState } from "react";

const Rr = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h2>Count:{count} </h2>
      <button onClick={handleCount}>Click:</button>
    </div>
  );
};

export default Rr;
