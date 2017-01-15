import React, { Component } from 'react';

export default class ListItem extends Component {

    setRating() {
        if(this.props.rating.title == "暂无评分"){
            return(
                <span className="noRating">暂无评分</span>
            )
        }else{
            return (
                <span>{this.props.rating.title}<small>{this.props.rating.smallTitle}</small></span>
            )
        }
    }

    render() {
        return (
            <div className="movie-list">
                <div className="movie-img">
                    <img src={this.props.imgSrc} alt=""/>
                </div>
                <div className="movie-info">
                    <div className="movie-title">
                        <h2>
                            {this.props.title}
                            {this.setRating()}
                        </h2>
                    </div>
                    <div className="movie-body">
                        <div className="movie-body-left">
                            <p>{this.props.cat}</p>
                            <p>主演:{this.props.star}</p>
                            <p className="otherwish">{this.props.otherwish}</p>
                        </div>
                        <div className="movie-body-right">
                            {this.props.preSale == '0' ? <span>购票</span> : <span className="unSale">预售</span>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}