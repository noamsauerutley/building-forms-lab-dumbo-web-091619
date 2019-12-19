// Add BandInput component
import React, { Component } from 'react'
state = {
  text: ""
}

class BandInput extends Component {
  render() {
    return(
      <div>
      <form>
        <input type="text" />
        </form>
      </div>
    )
  }
}

export default BandInput
