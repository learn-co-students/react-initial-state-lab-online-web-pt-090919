import React from 'react'; 

export default class Bomb extends React.Component{ 
    constructor(props){
        super(props)
        this.state = { secondsLeft: props.initialCount}
    }
    render(){ 

        let display = this.state.secondsLeft === 0 ? "Boom!" : this.state.secondsLeft + " seconds left before I go boom!"
        return (<div>

            <h1>{display}</h1>
        </div>)
    }
}