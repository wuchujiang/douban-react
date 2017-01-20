import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Button, NavBar, TabBar , Icon, Toast} from 'antd-mobile';
import { Link } from 'react-router';
import { Player } from 'video-react';
import request from 'superagent';
import _ from 'lodash';
import "node_modules/video-react/dist/video-react.css";
import 'assets/video.scss';

class Video extends Component {

    render() {
        let param = this.props.param;
        return(
            <div>
                <NavBar
                            mode="dark"
                            iconName="false"
                            leftContent={<Link to={"list/" + param.id}>< Icon key = "0" type = "left" /></Link>}
                            rightContent={[< Icon key = "0" type = "search" /> , < Icon key = "1" type = "ellipsis" />]}>{param.videoName}</NavBar>
               <Player poster={param.videoImg} src={param.videourl} />
            </div>
        )
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