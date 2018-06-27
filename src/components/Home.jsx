import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Home extends Component {
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