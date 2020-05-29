// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super()
    this.state = {
      // set initial state based off component's prop
      secondsLeft: props.initialCount
    }
  }
  render() {
    const secsLeft = this.state.secondsLeft.toString()
    return secsLeft === '0' ? (<p>Boom!</p>) : (<p>{secsLeft} seconds left before I go boom!</p>)
  }
}
