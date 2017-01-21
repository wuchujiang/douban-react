import React, { Component } from "react";
import _ from 'lodash';
import {Toast} from 'antd-mobile';
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

    render() {
        return (
            <div className="position">
                {this.props.currentPosition.describe}
            </div>
        )
    }
}
