import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cinemaActions from 'client/state/cinema/actions';
import {Button, NavBar , Icon} from 'antd-mobile';
import _ from 'lodash';
import MainBody from './mainBody';

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
            getCinemaList: state.cinema.getCinemaList,
            currentPosition: state.cinema.currentPosition
        };
    },
    (dispatch) => {
        let actions = {};
        _.assign(actions, cinemaActions);
        return { actions: bindActionCreators(actions, dispatch) }
    }
)(Cinema);