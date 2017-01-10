import React, {Component} from 'react';
import {Button} from 'antd-mobile';
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
                <button onClick={this.loseCounter}>减少</button>
                <button onClick={this.addCounter}>增加</button>
                <Button />
            </div>
        )
    }
}