import React, { Component } from "react";
import _ from 'lodash';
import {Toast, Icon} from 'antd-mobile';
import publicTool from 'client/utils/publicTool';

export default class CityLocation extends Component {
    constructor(props) {
        super(props);
        this.showPosition = this.showPosition.bind(this);
        this.showError = this.showError.bind(this);
    }

    componentDidMount() {
        let _this = this;
        //通过ip查询地理位置
       Toast.loading('加载中...', 0, () => {});
       publicTool.getServiceData("http://m.maoyan.com/cinemas.json", data => {
           Toast.hide();
           this.props.actions.getCinemaList(data);
       })

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
        }
    }

    showPosition(position) {
        let latitude = position.latitude;
        let longitude = position.longitude;
        let _this = this;
        if(!_.isEmpty(latitude) &&! _.isEmpty(longitude)){
            Toast.loading('加载中...', 0, () => {});
            publicTool.getServiceData(`http://m.maoyan.com/addr/latlng/${latitude},${longitude}/end`, data => {
                Toast.hide();
                _this.props.actions.currentPosition({
                    city: data.data.city,
                    lat: data.data.lat,
                    lng: data.data.lng,
                    describe: data.data.detail
                });
            })
        }
    }

    showError(error) {
        if(error.code){
            console.log("获取位置错误");
            this.props.actions.currentPosition({
                describe: "暂时无法获取位置"
            });
        }
    }

    getCinemaList() {
        let data = this.props.getCinemaList.data;
        let listArr = [];
        _.mapKeys(data,(v, k) => {
            listArr.push (
                <div key={_.uniqueId()} className="address">
                    <h3>{k}<span>({data[k].length}家)</span><Icon type="down" /></h3>
                    <ul>
                        {
                            v.map( _v => {
                                return (
                                    <li  key={_.uniqueId()}>
                                        <h4>{_v.nm}<span>{_v.sellPrice}<small>元起</small></span></h4>
                                        <div className="li-flex">
                                            <div className="address-info">{_v.addr}</div>
                                            <div className="distance">未知</div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            )
        });
        return listArr;
    }

    render() {
        let getCinemaList = this.props.getCinemaList;
        console.log(getCinemaList);
        return (
            <div className="cinema">
                <div className="position">
                    {this.props.currentPosition.describe}
                </div>
                {!_.isEmpty(getCinemaList) ? this.getCinemaList() : ""}
            </div>
        )
    }
}
