import React, { Component } from 'react';

import _ from 'lodash';
import publicTool from 'client/utils/publicTool';
import { Icon } from 'antd-mobile';

export default class MovePhoto extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        //获取电影剧照
        publicTool.getServiceData('https://wx.maoyan.com/wxapi/mmdb/movie/photos/' + this.props.listId + '/list.json', (data) =>{
            this.props.actions.moviePhoto(data);
        });
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