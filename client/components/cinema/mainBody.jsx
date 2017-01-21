import React, { Component } from 'react';
import CityLocation from './getCinemaList';

export default class Mainbody extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      
    }

    getCurrentPosition() {
        
    }

    render() {
        return (
            <div>
                <CityLocation {...this.props} />
            </div>
        )
    }
}