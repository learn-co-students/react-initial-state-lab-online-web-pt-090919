// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
        this.beginTimer()
    }

    beginTimer = () => setInterval(this.update, 1000)

    update = () => {
        const newCount = this.state.secondsLeft - 1
        if(newCount >= 0){
            this.setState({
                secondsLeft: newCount
            })
        }
    }

    render() {
        return this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`
    }
}
