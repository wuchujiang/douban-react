import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from 'client/state/cinema/actions';
import {Button, NavBar, TabBar , Icon, Toast} from 'antd-mobile';
import { Link } from 'react-router';
import { Player } from 'video-react';
import request from 'superagent';
import _ from 'lodash';
import MainBody from './mainBody';
import "node_modules/video-react/dist/video-react.css";
import 'assets/video.scss';

class Cinema extends Component {

    render() {
        return(
            <div>
                <NavBar
                            mode="dark"
                            iconName="false"
                            rightContent={[< Icon key="0" type="search" />, < Icon key="1" type="ellipsis" />]}>影院</NavBar>
                <div className="nav-space"></div>
                <MainBody {...this.props} />
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            getCinemaList: state.cinema.getCinemaList
        };
    },
    (dispatch) => {
        let actions = {};
        _.assign(actions, appActions);
        return { actions: bindActionCreators(actions, dispatch) }
    }
)(Cinema);