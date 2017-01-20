import React, { Component } from 'react';
import request from 'superagent';

export default class Mainbody extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        request.get('http://m.maoyan.com/cinemas.json')
            .then(res => {
                console.log(JSON.parse(res.text));
            },
            err => {
                console.log(err);
            }    
        )
    }

    getCurrentPosition() {
        
    }

    render() {
        return (
            <div>
                1132323
            </div>
        )
    }
}