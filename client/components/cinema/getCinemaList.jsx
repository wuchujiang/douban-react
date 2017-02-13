import React, { Component } from "react";
import ReactDOM from 'react-dom';
import _ from 'lodash';
import { Toast, Icon } from 'antd-mobile';
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
        Toast.loading('加载中...', 0, () => { });
        publicTool.getServiceData("https://m.maoyan.com/cinemas.json", null, data => {
            Toast.hide();
            this.props.actions.getCinemaList(data);
        })

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
        }
    }

    showPosition(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let _this = this;
        Toast.loading('加载中...', 0, () => { });
        let query = {
            location: position.coords.latitude + "," + position.coords.longitude,
            ak: "UfAAwhLHcsbPaYDyIhqetZ5Cu95p3WjE",
            output: "json"
        };
        publicTool.getServiceData("http://api.map.baidu.com/geocoder/v2/", query, data => {
            Toast.hide();
            _this.props.actions.currentPosition({
                city: data.result.addressComponent.city,
                describe: data.result.formatted_address,
                lat: data.result.location.lat,
                lng: data.result.location.lng
            });
        })
    }

    showError(error) {
        if (error.code) {
            console.log("获取位置错误");
            this.props.actions.currentPosition({
                describe: "暂时无法获取位置"
            });
        }
    }

    showCinemaInfo(ref) {
        if (ReactDOM.findDOMNode(this.refs[ref]).className == "address") {
            ReactDOM.findDOMNode(this.refs[ref]).className = "address select";

        } else {
            ReactDOM.findDOMNode(this.refs[ref]).className = "address";
        }
    }

    calculatedDistance(location1, location2) {
        let distance;
        distance = publicTool.getBuDuMapLocation(location1, location2);
        if(distance >= 100){
            distance = (distance/1000).toFixed(1) + "km";
        }else{
            distance = "小于100m";
        }
        return distance;
    }

    getCinemaList() {
         console.log(this.props.currentPosition.lat);
        let data = this.props.getCinemaList.data;
        let that = this;
        let listArr = [];
        _.mapKeys(data, (v, k) => {
            listArr.push(
                <div key={_.uniqueId()} className="address" ref={v}>
                    <h3 onClick={e => { this.showCinemaInfo(v) } }>{k}<span>({data[k].length}家)</span><Icon type="down" /></h3>
                    <ul>
                        {
                            v.map(_v => {
                                let location1 = {
                                    lat: that.props.currentPosition.lat,
                                    lng: that.props.currentPosition.lng,
                                };
                                let location2 = {
                                    lat: _v.lat,
                                    lng: _v.lng
                                }
                                return (
                                    <li key={_.uniqueId()}>
                                        <h4>{_v.nm}<span>{_v.sellPrice}<small>元起</small></span></h4>
                                        <div className="li-flex">
                                            <div className="address-info">{_v.addr}</div>
                                            <div className="distance">{ that.calculatedDistance(location1, location2)}</div>
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
