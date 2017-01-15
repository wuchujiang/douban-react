import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MainBody from './mainBody';
import * as appActions from 'client/state/app/actions';
import _ from 'lodash';
import {Button, NavBar, TabBar , Icon, Toast} from 'antd-mobile';
import request from 'superagent';
class App extends Component {
    constructor(props) {
        super(props);  
    }

    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    iconName="false"
                    rightContent={[ < Icon key = "0" type = "search" />, < Icon key = "1" type = "ellipsis" />]}>猫眼电影</NavBar>    
               <MainBody {...this.props} />
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            getMovingList: state.app.getMovingList,
            getCurrentPosition: state.app.getCurrentPosition
        };
    },
    (dispatch) => {
        let actions = {};
        _.assign(actions, appActions);
        return { actions: bindActionCreators(actions, dispatch) }
    }
)(App);