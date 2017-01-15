import React, {Component} from 'react';

import {Link} from 'react-router';
import {Toast, WhiteSpace, WingBlank, Button} from 'antd-mobile';
import _ from 'lodash';
import MovieList from './movieList';

import CityLocation from './cityLocation';
export default class MainBody extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {

        //离开时销毁页面 this.props.actions.getMovingList({});
    }

    render() {
        
        return (
            <div>
                <CityLocation />
                <MovieList {...this.props} />
            </div>
        )
    }
}