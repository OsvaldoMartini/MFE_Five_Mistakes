import React, { useState } from 'react';

export default function Counter({ app }) {

  const [counter, setCounter] = useState(0);

  return (
    <div className="border-2 border-blue-500 p-5 rounded-xl">
      <div>{app.name}</div>
      <div>{counter}</div>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={() => setCounter(counter + 1)}>Add to Count</button>
    </div >
  )
}