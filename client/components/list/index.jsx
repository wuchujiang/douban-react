import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Button, NavBar, TabBar , Icon, Toast} from 'antd-mobile';
import { Link } from 'react-router';
import MainBody from './mainBody';
import * as listActions from 'client/state/list/actions';
import _ from 'lodash';
import request from 'superagent';

class List extends Component {
    componentDidMount() {
        let getMovingInfo = this.props.getMovingInfo;
        let listId = this.props.listId;
        if (_.isEmpty(getMovingInfo)) {
            Toast.loading('加载中...', 0, () => { });
            request.get('https://api.douban.com/v2/movie/subject/'+listId)
                .end((err, res) => {
                    this.props.actions.getMovingInfo(JSON.parse(res.text));
                    Toast.hide();
                })
        }
    }

    componentWillUnmount() {
        this.props.actions.getMovingInfo({});
    }

    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    iconName="false"
                    leftContent={<Link to="/">< Icon key = "0" type = "left" /></Link>}
                    rightContent={[< Icon key = "0" type = "search" /> , < Icon key = "1" type = "ellipsis" />]}>{this.props.title}</NavBar>
               <MainBody {...this.props} />
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            counter: state.list.counter,
            getMovingInfo: state.list.getMovingInfo,
            setShowMoreButtonState: state.list.setShowMoreButtonState
        };
    },
    (dispatch) => {
        let actions = {};
        _.assign(actions, listActions);
        return { actions: bindActionCreators(actions, dispatch) }
    }
)(List);