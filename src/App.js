import React, { useContext } from 'react'

const ctx = React.createContext()

// function Text() {
//   return <ctx.Consumer>
//     {value => <h1>Test，上下文的值：{value}</h1>}
//   </ctx.Consumer>
// }

function Text() {
  const value = useContext(ctx)
  return <h1>Test，上下文的值：{value}</h1>
}

export default function App() {
  return (
    <div>
      <ctx.Provider value={122}>
        <Text />
      </ctx.Provider>
    </div>
  )
}
