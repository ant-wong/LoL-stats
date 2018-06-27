import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './styles/style.css'

/* COMPONENTS */
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'

/* API KEY */
// RGAPI-ab0e9baf-5637-45b4-9f15-0e43b7ef6b65

class App extends Component {
  constructor() {
    super()
    this.state = {
      players: []
    }
  }

  render() {
    return (
      <div className="main">

        {/* NAVIGATION AND SEARCH */}
        <Navbar />

        {/* ROUTES */}
        <Switch>
          <Route exact path="/" render={() => {
            return <Home />
          }} />

          <Route path="/summoner/:id" render={() => {
            return <Profile />
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
