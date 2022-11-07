import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RouteGuard from './RouteGuard';

function Page1() {
  return <h1>Page1</h1>
}

function Page2() {
  return <h1>Page2</h1>
}

export default function App() {
  return (
    <Router
      getUserConfirmation={(msg, callback) => callback(window.confirm(msg))}
    >
      <ul>
        <li>
          <Link to="/page1">页面1</Link>
        </li>
        <li>
          <Link to="/page2">页面2</Link>
        </li>
      </ul>
      <RouteGuard onChange={(preLocation, location, action, unListen) => {
        console.log(`从${preLocation.pathname}跳转到${location.pathname}，跳转方式：${action}`)
      }}>
        <Route path='/page1' component={Page1} />
        <Route path='/page2' component={Page2} />
      </RouteGuard>

    </Router>
  )
}
