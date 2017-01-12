import React, {Component} from 'react';
import {Button} from 'antd-mobile';

import {Link} from 'react-router';
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

    componentWillUnmount() {
        console.log("我销毁啦！！！")  
    }

    render() {
        return(
            <div>
                <Link to="/list">点击跳转到list页面</Link>
            </div>
        )
    }
}