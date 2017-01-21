import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Icon, Flex, Toast } from 'antd-mobile';
import ListItem from './listItem';
import publicTool from 'client/utils/publicTool';
import _ from 'lodash';

import 'assets/movieList.scss';
export default class MovieList extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        if (_.isEmpty(this.props.getMovingList)) {
            this.getCurrentAddress().then(city => {
                console.log(city);
                publicTool.getServiceData('https://wx.maoyan.com/mmdb/movie/v2/list/hot.json?limit=12&offset=0&ct=', (data) =>{
                    this.props.actions.getMovingList(data);
                });
            }).catch(err => {
                Toast.offline('网络连接失败!!');
            })
         }
       
    }

    getCurrentAddress() {
        return new Promise((resolve, reject) => {
            let _this = this;
            publicTool.getServiceData("https://api.map.baidu.com/location/ip?ak=UfAAwhLHcsbPaYDyIhqetZ5Cu95p3WjE&coor=bd09ll", (data) =>{
                _this.props.actions.getCurrentPosition({
                    city: data.content.address_detail.city,
                    lat: data.content.point.x,
                    ing: data.content.point.y
                });
                resolve(data.content.address_detail.city);
            }, (error) => {
                reject("1");
            });
        })
    }

    getRating(item) {
        let rating = {}
        if(item.sc == "0"){
            if(item.wish != "0"){
                rating = {
                    title: item.wish,
                    smallTitle: '人想看'
                }
            }else{
               rating = {
                    title: "暂无评分",
                    smallTitle: ''
                }
            }
        }else{
            if((item.sc + "").length == 1){
                 rating = {
                    title: item.sc + ".0",
                    smallTitle: '分'
                }
            }else{
                rating = {
                    title: item.sc,
                    smallTitle: '分'
                }
            }
        }
        return rating;
    }

    getAjaxListMove() {
        let getMovingList = this.props.getMovingList.data.hot;
        return (getMovingList.map((v, k) => {
            return (
                <Link
                    key={_.uniqueId()}
                    to={{
                        pathname: "list/" + v.id,
                        query: {
                            title: v.nm,
                            id: v.id
                        }
                    }}>
                    <ListItem
                        key={_.uniqueId()}
                        title={v.nm}
                        imgSrc={v.img}
                        rating={this.getRating(v)}
                        cat={v.cat}
                        star={v.star}
                        otherwish={v.showInfo}
                        preSale={v.preSale}
                        />
                </Link>
            )
        }))
    }

    render() {
        return (
            <div className="movie-list-wrap">
                {!_.isEmpty(this.props.getMovingList) ? this.getAjaxListMove() : ""}
            </div>
        )
    }
}