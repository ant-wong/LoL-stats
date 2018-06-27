import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Profile extends Component {
  render() {
    return (
      <div>
        <header>
          this is user.name's page
        </header>
        <section>
          user.stats
        </section>
      </div>
    )
  }
}

export default withRouter(Profile)