import React, {Component} from 'react';
import { Button, NavBar, TabBar, Icon, Flex } from 'antd-mobile';
import _ from 'lodash';
export default class MainBody extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    getRating(rate) {
        let star = [];
        for (let i = 0; i < 5; i++){
             star.push(<Icon key={_.uniqueId()} type="star" className={Math.round(rate / 2) > i ? "star" : "star-o"} />)   
        }
        return star;
    }
    
    getMovieContent() {
        let { getMovingInfo } = this.props;
        return (
            <div>
                <div className="movie-box">
                    <div className="movie-background"  style={{"backgroundImage": "url("+getMovingInfo.images.large+")"}} ></div>
                    <div className="movie-filter"></div>    
                    <div className="movie-content">
                        <div className="movie-content-body">
                            <div className="movie-pic">
                                <img src={getMovingInfo.images.large} alt=""/>
                            </div>
                            <div className="movie-info">
                                <h3>{getMovingInfo.title}</h3>
                                <p className="small-title">{getMovingInfo.aka[0]}</p>
                                <div className="movie-rating">
                                    <p className="rating-items">
                                        <span>
                                            {this.getRating(getMovingInfo.rating.average)}
                                        </span>
                                        <span className="rating-average">{getMovingInfo.rating.average.toString().length != 1 ? getMovingInfo.rating.average : getMovingInfo.rating.average + ".0"}</span>
                                    </p>
                                    <label>({getMovingInfo.ratings_count + "人评"})</label>      
                                </div>
                                <ul>
                                    <li>{getMovingInfo.genres.join(",")}</li>
                                    <li>{getMovingInfo.countries}</li>
                                    <li>{getMovingInfo.year}</li>                                
                                </ul>
                            </div>
                        </div>
                        <div className="movie-content-footer">
                            <Flex>
                                <Button>想看</Button>
                                <Button>评分</Button>
                            </Flex>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mobile-summary">
                        {getMovingInfo.summary}
                    </div>
                    <div className="showMore">
                        <Icon type="down" />
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let { getMovingInfo } = this.props;
        return (
            <div>
                {!_.isEmpty(getMovingInfo) ? this.getMovieContent() : ""}
            </div>
        )
    }
}