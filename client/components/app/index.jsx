import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MainBody from './mainBody';
import * as appActions from '../../state/app/actions';
import _ from 'lodash';
import {Button, NavBar, TabBar , Icon} from 'antd-mobile';
class App extends Component {
    constructor(props) {
        super(props);
        
    }

    componentWillMount() {

    }

    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[ < Icon key = "0" type = "search" />, < Icon key = "1" type = "ellipsis" />]}>正在热映</NavBar>    
               <MainBody {...this.props} />
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            getMovingList: state.app.getMovingList
        };
    },
    (dispatch) => {
        let actions = {};
        _.assign(actions, appActions);
        return { actions: bindActionCreators(actions, dispatch) }
    }
)(App);