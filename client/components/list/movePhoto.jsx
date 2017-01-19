import React, { Component } from 'react';

import _ from 'lodash';
import request from 'superagent';
import { Icon } from 'antd-mobile';

export default class MovePhoto extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        request.get('https://wx.maoyan.com/wxapi/mmdb/movie/photos/' + this.props.listId + '/list.json')
            .then(
            res => {
                this.props.actions.moviePhoto(JSON.parse(res.text));
            },
            err => {
                Toast.offline('网络连接失败!!!');
            }    
        )
    }

    getMoviePhotos() {
        let moviePhoto = this.props.moviePhoto.data;
        let photo = moviePhoto.photos;
        let photoArr = [];
        let k = moviePhoto.size >= 20 ? 20 : moviePhoto.size;
        for (let i = 0; i < k; i++){
            photoArr.push(
                <li key={_.uniqueId()}>
                    <img src={photo[i].olink.replace("/w.h", "")} alt=""/>
                </li>
            )
        }
        return photoArr
    }
    
    render() {
        let {moviePhoto} = this.props;
        return (
            <div className="photo">
                <h4>视频和剧照<span>{moviePhoto.data ? moviePhoto.data.size : ""}<Icon type="right" /></span></h4>
                <ul>
                    {!_.isEmpty(moviePhoto) ? this.getMoviePhotos() : ""}
                </ul>
            </div>
        )
    }
}