import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Button, NavBar, TabBar , Icon} from 'antd-mobile';

import MainBody from './mainBody';
import * as listActions from '../../state/list/actions';
import _ from 'lodash';

class List extends Component {
    render() {
        return (
            <div>
            <NavBar
                    mode="light"
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[ < Icon key = "0" type = "search" />, < Icon key = "1" type = "ellipsis" />]}>电影列表</NavBar>
               <MainBody {...this.props} />
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            counter: state.list.counter
        };
    },
    (dispatch) => {
        let actions = {};
        _.assign(actions, listActions);
        return { actions: bindActionCreators(actions, dispatch) }
    }
)(List);