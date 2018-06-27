import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Profile extends Component {

  async componentDidMount() {
    this.props.getUserInfo(await this.props.match.params.id)
    this.props.getLatestMatches(await this.props.match.params.id)
  }

  render() {
    const matchesJSX = this.props.playerGames.map((game) => {
      this.props.getMatchDetails(game.gameId)
      return <li key={game.gameId}>{game.champion}</li>
    })

    return (
      <div>
        <header>
          <h1>{this.props.player.name}</h1>
        </header>
        <section>
          <ul>
            {matchesJSX}
          </ul>
        </section>
      </div>
    )
  }
}

export default withRouter(Profile)