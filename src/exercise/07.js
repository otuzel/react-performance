// Production performance monitoring
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'
// 🐨 you're going to need the reportProfile function
// 💰 here, let me help you with that...
import reportProfile from '../report-profile'
import {unstable_trace as trace} from 'scheduler/tracing'

function Counter() {
  const [count, setCount] = React.useState(0)
  const increment = () =>
    trace('click', performance.now(), () => setCount(c => c + 1))
  return <button onClick={increment}>{count}</button>
}

function App() {
  return (
    <div>
      {/*
      🐨 Wrap this div in a React.Profiler component
      give it the ID of "counter" and pass reportProfile
      to the onRender prop.
      */}
      <React.Profiler id="counter" onRender={reportProfile}>
        <div>
          Profiled counter
          <Counter />
          <div>
            a
            <div>
              a
              <div>
                a
                <div>
                  a<div>a</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Profiler>
      <div>
        Unprofiled counter
        <Counter />
      </div>
    </div>
  )
}

export default App
