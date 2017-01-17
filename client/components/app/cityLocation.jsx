import React, { Component } from "react";
import request from 'superagent';

export default class CityLocation extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let _this = this;
        //通过ip查询地理位置
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
        }
    }

    showPosition(position) {
        let latitude = position.latitude;
        let longitude = position.longitude;
        console.log(latitude, longitude);
    }

    showError(error) {
        if(error.code){
            console.log("获取位置错误");
        }
    }

    render() {
        return (
            <div></div>
        )
    }
}
