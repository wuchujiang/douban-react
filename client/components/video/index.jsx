import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Button, NavBar, TabBar , Icon, Toast} from 'antd-mobile';
import { Link } from 'react-router';

import request from 'superagent';
import _ from 'lodash';

class Video extends Component {

    render() {
        <div>111</div>
    }
}

export default connect(
    (state) => {
        return {

        };
    },
    (dispatch) => {
        let actions = {};
        _.assign(actions);
        return { actions: bindActionCreators(actions, dispatch) }
    }
)(Video);