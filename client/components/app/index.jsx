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
        this.props.actions.getMovingList();
    }
    render() {
        return (
            <div>
                <NavBar
                        leftContent="返回"
                        mode="light"
                        onLeftClick={() => console.log('onLeftClick')}
                        rightContent={[ < Icon key = "0" type = "search" />, < Icon key = "1" type = "ellipsis" />
                    ]}>NavBar</NavBar>    
               <MainBody {...this.props} />
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            counter: state.app.counter
        };
    },
    (dispatch) => {
        let actions = {};
        _.assign(actions, appActions);
        return { actions: bindActionCreators(actions, dispatch) }
    }
)(App);