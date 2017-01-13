import React, {Component} from 'react';
import { Button, NavBar, TabBar, Icon } from 'antd-mobile';
export default class extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                
                <div>{this.props.getMovingInfo.summary}</div>
            </div>
        )
    }
}