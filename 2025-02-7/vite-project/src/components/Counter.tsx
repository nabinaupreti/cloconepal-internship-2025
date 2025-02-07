import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0); // Type the state as 'number'

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// it's called default import
export default Counter;

// use case, need to import like
// import Counter from "path";