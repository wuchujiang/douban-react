import React, {Component} from 'react';
import { Button, NavBar, TabBar, Icon, Flex } from 'antd-mobile';
import _ from 'lodash';
export default class MainBody extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    switchShow() {
        this.props.actions.setShowMoreButtonState(!this.props.setShowMoreButtonState);
    }

    getRating(rate) {
        let star = [];
        for (let i = 0; i < 5; i++){
             star.push(<Icon key={_.uniqueId()} type="star" className={Math.round(rate / 2) > i ? "star" : "star-o"} />)   
        }
        return star;
    }
    
    getMovieContent() {
        let { getMovingInfo, setShowMoreButtonState } = this.props;
        let movieDetail = getMovingInfo.data.MovieDetailModel;
        return (
            <div>
                <div className="movie-box">
                    <div className="movie-background"  style={{"backgroundImage": "url(" + movieDetail.img + ")"}} ></div>
                    <div className="movie-filter"></div>    
                    <div className="movie-content">
                        <div className="movie-content-body">
                            <div className="movie-pic">
                                <img src={movieDetail.img} alt=""/>
                            </div>
                            <div className="movie-info">
                                <h3>{movieDetail.nm}</h3>
                                <div className="movie-rating">
                                    <p className="rating-items">
                                        <span>
                                            {this.getRating(movieDetail.sc)}
                                        </span>
                                        <span className="rating-average">{movieDetail.sc.toString().length != 1 ? movieDetail.sc : movieDetail.sc + ".0"}</span>
                                    </p>
                                    <label>({movieDetail.snum + "人评"})</label>      
                                </div>
                                <ul>
                                    <li>{movieDetail.cat}</li>
                                    <li>{movieDetail.src}/ {movieDetail.dur}分钟</li>
                                    <li>{movieDetail.rt}</li>                                
                                </ul>
                            </div>
                        </div>
                        <div className="movie-content-footer">
                            <Flex>
                                <Button><Icon type="heart"/>想看</Button>
                                <Button><Icon type="star"/>评分</Button>
                            </Flex>
                        </div>
                    </div>
                </div>
                <div className="summary-box">
                    <div className={setShowMoreButtonState ? "movie-summary show" : "movie-summary hide"}>
                        {movieDetail.dra}
                    </div>
                    <div className="showMore" onClick={e => {
                        this.switchShow();
                    }}>
                        <Icon type={setShowMoreButtonState ? "up" : "down"} />
                    </div>
                </div>
            </div>
        )
    }

    render() {
        let { getMovingInfo } = this.props;
        console.log(getMovingInfo)
        return (
            <div>
                {!_.isEmpty(getMovingInfo) ? this.getMovieContent() : ""}
            </div>
        )
    }
}