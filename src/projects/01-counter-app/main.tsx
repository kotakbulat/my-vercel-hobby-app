import { useState } from 'react'

function CounterApp() {
  const [count, setCount] = useState(0)

  return (
        <>
            <div>
                <h1>Counter App</h1>
                <button
                  className="counter"
                  onClick={() => setCount((count) => count + 1)}
                >
                  Count is {count}
                </button>
            </div>
        </>
  )
}

export default CounterApp;