import React, { Component } from 'react';
class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }

    increment(counter){
        this.setState({counter: counter + 1})
    }


    render() {
        return(
            <div>
                <h1> Clickitty Clack! </h1>
                <p>{this.state.counter}</p>
                <button onClick={() => this.increment(this.state.counter)} >Press Me</button>
            </div>

        )
    }
}
export default Header