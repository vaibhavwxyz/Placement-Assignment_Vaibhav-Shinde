import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter App</h1>
      <div className="card">
      <button onClick={() => setCount((count) => count - 1)}>
          Minus
        </button>
        <p className='show-count'>
          count is {count}
        </p>
        <button onClick={()=> setCount((count)=> count+1)}>
          Plus
        </button>
      </div>
    </>
  )
}

export default App
