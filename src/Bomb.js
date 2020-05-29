import React from "react";
import { ProgressPlugin } from "webpack";

class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = { secondsLeft: props.initialCount };
  }

  render() {
    const msg =
      this.state.secondsLeft === 0
        ? "Boom!"
        : `${this.state.secondsLeft} seconds left before I go boom!`;
    return <div>{msg}</div>;
  }
}
export default Bomb;
