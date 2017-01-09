import React, {Component} from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        this.addCounter = this.addCounter.bind(this);
        this.loseCounter = this.loseCounter.bind(this);
    }

    addCounter() {
        this.props.actions.counter(this.props.counter);
    }

    loseCounter() {
        this.props.actions.counter(this.props.counter);
    }

    render() {
        return(
            <div>
                <p>{this.props.counter}</p>
                <button onClick={this.loseCounter}>-</button>
                <button onClick={this.addCounter}>+</button>
            </div>
        )
    }
}