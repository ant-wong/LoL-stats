import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class NotFound extends Component {
  render() {
    return (
      <div>
        <header>
          :(
        </header>
        <section>
          nothing
        </section>
      </div>
    )
  }
}

export default withRouter(NotFound)