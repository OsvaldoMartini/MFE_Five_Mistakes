import React, { useState } from 'react';

export default function Counter() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="border-2 border-blue-500 p-5 rounded-xl">
      <div>{counter}</div>
      <div onClick={() => setCounter(counter + 1)}>Add to Count</div>
    </div >
  )
}