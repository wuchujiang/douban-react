import React, { Component } from "react";

export default class CityLocation extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
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
            alert("获取位置错误");
        }
    }

    render() {
        return (
            <div></div>
        )
    }
}
