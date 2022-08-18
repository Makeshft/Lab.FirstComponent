// Your code here!
import React from 'react'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('app'));
const Counter = ()=> {
    const [count, setCount] = React.useState(0);
    return (
      <div id='container'>
        <div id='navbar'>
          Counter.js
        </div>
        <div id='counter'>
          <h1>{ count }</h1>
          <button onClick={()=> setCount(count + 1)}>
            Increment
          </button>
        </div>
      </div>
    )
}

root.render(<Counter />)

// onClick={() => setCount(count + 1)}
// { count }