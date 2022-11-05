import React, { useState } from 'react'
import useAllStudent from "./myHooks/useAllStudent"
import useTimer from './myHooks/useTimer';

function Test() {
  const stus = useAllStudent();
  const list = stus.map(it => (<li key={it.id}>{it.name}</li>))

  useTimer(() => {
    console.log("Test组件中的一些副作用")
  }, 1000)

  return <ul>
    {list}
  </ul>
}

export default function App() {
  const [visible, setVisible] = useState(true)
  return (
    <div>
      <button onClick={() => {
        setVisible(!visible)
      }}>隐藏/显示</button>
      
      {
        visible && <Test />
      }
    </div>
  )
}
