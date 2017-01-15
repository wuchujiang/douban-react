import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Icon, Flex, Toast } from 'antd-mobile';
import ListItem from './listItem';
import request from 'superagent';
import _ from 'lodash';

import 'assets/movieList.scss';
export default class MovieList extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        if (_.isEmpty(this.props.getMovingList)) {
            Toast.loading('加载中...', 0, () => { });
            request
                .get('http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000')
                .timeout(15000)
                .then(
                res => {
                    Toast.hide();
                    this.props.actions.getMovingList(JSON.parse(res.text));
                },
                err => {
                    Toast.hide();
                    Toast.offline('网络连接失败!!!');
                })
        }
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
        let getMovingList = this.props.getMovingList.data.movies;
        return (getMovingList.map((v, k) => {
            return (
                <Link
                    key={_.uniqueId()}
                    to={{
                        pathname: "list/" + v.id,
                        query: {
                            title: v.nm
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
            <div>
                {!_.isEmpty(this.props.getMovingList) ? this.getAjaxListMove() : ""}
            </div>
        )
    }
}