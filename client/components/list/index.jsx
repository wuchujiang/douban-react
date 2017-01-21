import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Button, NavBar, TabBar , Icon, Toast} from 'antd-mobile';
import { Link } from 'react-router';
import MainBody from './mainBody';
import Score from './score';
import * as listActions from 'client/state/list/actions';
import publicTool from 'client/utils/publicTool';
import _ from 'lodash';

class List extends Component {
    componentDidMount() {
        let getMovingInfo = this.props.getMovingInfo;
        let listId = this.props.listId;
        if (_.isEmpty(getMovingInfo)) {
            publicTool.getServiceData('https://wx.maoyan.com/wxapi/mmdb/movie/v5/' + listId + '.json?ci=30', (data) => {
                this.props.actions.getMovingInfo(data);
            })
        }
    }

    closeScorePage() {
        this.props.actions.scoreCounter({show: !this.props.scoreCounter.show});
    }

    componentWillUnmount() {
        this.props.actions.getMovingInfo();
        this.props.actions.setShowMoreButtonState(false);
        this.props.actions.checkActorInfo();
        this.props.actions.setActorItem();
    }

    render() {
        let {scoreCounter, title} = this.props;
        if(!scoreCounter.show){
            return (
                <div>
                    <NavBar
                        mode="dark"
                        iconName="false"
                        leftContent={<Link to="/">< Icon key = "0" type = "left" /></Link>}
                        rightContent={[< Icon key="0" type="search" />, < Icon key="1" type="ellipsis" />]}>{title}</NavBar>
                    <div className="nav-space"></div>
                    <MainBody {...this.props} />
                </div>
            )
        }else{
             return(
                <div>
                    <NavBar
                        mode="dark"
                        iconName="false"
                        onLeftClick = {e => {this.closeScorePage();}}
                        leftContent={< Icon key = "0" type = "left" />}
                        rightContent={[< Icon key="0" type="search" />, < Icon key="1" type="ellipsis" />]}>评分</NavBar>
                     <div className="nav-space"></div>
                    <Score {...this.props} />
                </div>
            )
        }
    }
}

export default connect(
    (state) => {
        return {
            counter: state.list.counter,
            getMovingInfo: state.list.getMovingInfo,
            setShowMoreButtonState: state.list.setShowMoreButtonState,
            setActorItem: state.list.setActorItem,
            checkActorInfo: state.list.checkActorInfo,
            hasReadMove: state.list.hasReadMove,
            scoreCounter: state.list.scoreCounter,
            moviePhoto: state.list.moviePhoto
        };
    },
    (dispatch) => {
        let actions = {};
        _.assign(actions, listActions);
        return { actions: bindActionCreators(actions, dispatch) }
    }
)(List);