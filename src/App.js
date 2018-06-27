import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './styles/style.css'

/* COMPONENTS */
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => {
            return <Home />
          }} />

          <Route path="/summoner/:id" render={() => {
            return <Profile />
          }} />
        </Switch>
      </div>
    )
  }
}

export default App
