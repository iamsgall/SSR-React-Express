import React, {useState} from 'react';

export default function Counter() {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <p>{count}</p>
      <button style={{padding: 5, margin: 5}} onClick={decrement}>
        Decrement
      </button>
      <button style={{padding: 5, margin: 5}} onClick={increment}>
        Increment
      </button>
    </>
  );
}
