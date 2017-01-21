import React, { Component } from 'react';
import request from 'superagent';
import { Toast } from 'antd-mobile';
import _ from 'lodash';
import publicTool from 'client/utils/publicTool';
export default class ActorList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        publicTool.getServiceData('https://wx.maoyan.com/wxapi/mmdb/v7/movie/' + this.props.listId + '/celebrities.json', (data) =>{
            this.props.actions.setActorItem(data);
        });
    }

    getActorList() {
        let data = this.props.setActorItem.data;
        let actorArr = [];
        data.map((v, k) => {
            v.map((_v, _k) => {
                if (_v.cr == 1 || _v.cr == 2) {
                    actorArr.push(
                        <li onClick={e => {
                            this.props.actions.checkActorInfo(_v);
                        }} key={_.uniqueId()}>
                            <div className="actor-img">
                                <img src={_v.avatar.replace("/w.h", "")} alt=""/>
                            </div>
                            <p className="actor-name">
                                {_v.cnm}
                            </p>
                            <p className="actor-role">
                                {_v.cr == 2 ? '导演' : _v.roles}
                            </p>
                        </li>)
                }
            })
        })
        return actorArr
    }

    render() {
        return (
            <div className="actor-list">
                <h4>演职人员</h4>
                <ul>
                    {!_.isEmpty(this.props.setActorItem) ? this.getActorList() : ""}
                </ul>
            </div>
        )
    }
}