
import React, { useState } from 'react'

export default function App() {
  console.log("app render")
  const [n, setN] = useState(0)
  return (
    <div>
      <button onClick={() => {
        // setN(n - 1)
        setN(prevN => prevN - 1)
        setN(prevN => prevN - 1)
      }}>-</button>
      <span>{n}</span>
      <button onClick={() => {
        // setN(n + 1)
        setN(prevN => prevN + 1)
        setN(prevN => prevN + 1)
      }}>+</button>
    </div>
  )
}
