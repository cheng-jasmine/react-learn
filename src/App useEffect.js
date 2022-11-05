import React, { useState, useEffect } from 'react'

export default function App() {
  const [n, setN] = useState(0)

  useEffect(() => {
    console.log("改变页面标题的副作用操作", n)
    document.title = `计数器：${n}`
  }, [n])
  return (
    <div>
      <span>{n}</span>
      <button onClick={() => {
        setN(n + 1)
      }}>+</button>
    </div>
  )
}
