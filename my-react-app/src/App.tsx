import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
       <button onClick={setCount((count = 0))}>Reset</button>
    </div>
  );
};

export default CounterApp;
