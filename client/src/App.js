import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import axios from 'axios'
import './styles/style.css'

/* COMPONENTS */
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import NotFound from './components/NotFound';

/* API KEY */
// RGAPI-ab0e9baf-5637-45b4-9f15-0e43b7ef6b65

class App extends Component {
  constructor() {
    super()
    this.state = {
      player: {},
      playerGames: []
    }
  }


  /*** CLIENT SIDE API CALLS TO SERVER ***/

  /* GET UNIQUE ID */
  findSummoner = async (value) => {
    let response = await axios.post('http://localhost:6060/summonerName', {
      user: value
    })
    response.status === 200 ? this.props.history.push(`/summoner/${response.data.accountId}`) : this.props.history.push('/')
  }

  /* USER INFO */
  getUserInfo = async (id) => {
    let response = await axios.get(`http://localhost:6060/summoner/${id}`)
    this.setState({
      player: response.data
    })
  }

  /* GET MATCHES */
  getLatestMatches = async (id) => {
    let response = await axios.post(`http://localhost:6060/summonerMatches`, {
      id: id
    })
    let latestMatches = response.data.matches.slice(0, 10)
    this.setState({
      playerGames: latestMatches
    })
  }
  /* MATCH DETAILS */
  getMatchDetails = async (id) => {
    let response = await axios.post('http://localhost:6060/matchDetails', {
      id: id
    })
    console.log(await response.data)
  }


  render() {
    return (
      <div className="main">

        {/* NAVIGATION AND SEARCH */}
        <Navbar />

        {/* ROUTES */}
        <Switch>
          <Route exact path="/" render={() => {
            return <Home findSummoner={this.findSummoner}/>
          }} />

          <Route path="/summoner/:id" render={() => {
            return <Profile 
                      {...this.state} 
                      getUserInfo={this.getUserInfo}
                      getLatestMatches={this.getLatestMatches}
                      getMatchDetails={this.getMatchDetails}
                  />
          }} />

          <Route path="*" component={NotFound} />
        </Switch>

      </div>
    )
  }
}

export default withRouter(App)
