import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class Home extends Component {

  async componentDidMount() {
    const res = await axios.get('https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/BFY%20Meowington/?api_key=RGAPI-e787d01c-fa81-4d3b-b34d-8f26a7a9cdea')
    console.log(await res)
  }

  render() {
    return (
      <div>
        <header>
          welcome.
        </header>
        <section>
          content
        </section>
      </div>
    )
  }
}

export default withRouter(Home)