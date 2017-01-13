import React, {Component} from 'react';

import {Link} from 'react-router';
import {Toast, WhiteSpace, WingBlank, Button} from 'antd-mobile';
import request from 'superagent';

import ListItem from './lists';

import _ from 'lodash';
export default class extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (_.isEmpty(this.props.getMovingList)) {
            Toast.loading('加载中...', 0, () => {});
            request
                .get('https://api.douban.com/v2/movie/in_theaters')
                .end((err, res) => {
                    Toast.hide();
                    this
                        .props
                        .actions
                        .getMovingList(JSON.parse(res.text));
                })
        }

    }

    componentWillUnmount() {

        //离开时销毁页面 this.props.actions.getMovingList({});
    }

    getAjaxListMove() {
        let getMovingList = this.props.getMovingList;
        if (!_.isEmpty(getMovingList)) {
            return (getMovingList.subjects.map((v, k) => {
                return (
                    <Link
                        to={{
                        pathname: "list/" + v.id,
                        query: {
                            title: v.title
                        }
                    }}>
                        <ListItem
                            key={_.uniqueId()}
                            title={v.title}
                            extra={v.year}
                            thumb={v.images.medium}
                            content="电影介绍电影介绍"
                            footContent={v.title}/>
                    </Link>
                )
            }))
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.getAjaxListMove()}
            </div>
        )
    }
}