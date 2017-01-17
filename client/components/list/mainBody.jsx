import React, {Component} from 'react';
import { Button, NavBar, TabBar, Icon, Flex } from 'antd-mobile';
import _ from 'lodash';
import ActorList from './actorList';
import ActorInfo from './actorInfo';
export default class MainBody extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    switchShow() {
        this.props.actions.setShowMoreButtonState(!this.props.setShowMoreButtonState);
    }

    getRating(movieDetail) {
        if (movieDetail.sc != 0) {
            let star = [];
            for (let i = 0; i < 5; i++){
                star.push(<Icon key={_.uniqueId()} type="star" className={Math.round(movieDetail.sc / 2) > i ? "star" : "star-o"} />)   
            }
            return (
                <div className="movie-rating">
                    <p className="rating-items">
                        <span>
                            {star}
                        </span>
                        <span className="rating-average">{movieDetail.sc.toString().length != 1 ? movieDetail.sc : movieDetail.sc + ".0"}</span>
                    </p>
                    <label>({movieDetail.snum + "人评"})</label>    
                </div>
             
            )
        } else {
            return (
                <div className="wishNumber">
                    {movieDetail.wish}人想看
                </div>
            )
        }
    }
       
    getMovieContent() {
        let { getMovingInfo, setShowMoreButtonState } = this.props;
        let movieDetail = getMovingInfo.data.movie;
        return (
            <div>
                <div className="movie-box">
                    <div className="movie-background"  style={{"backgroundImage": "url(" + movieDetail.img.replace("/w.h","") + ")"}} ></div>
                    <div className="movie-filter"></div>    
                    <div className="movie-content">
                        <div className="movie-content-body">
                            <div className="movie-pic">
                                <img src={movieDetail.img.replace("/w.h","")} alt="" />
                                <div className="movie-player">
                                    <div className="movie-player-button">
                                <Icon type="caret-right" />
                            </div>    
                        </div>
                            </div>
                            <div className="movie-info">
                                <h3>{movieDetail.nm}</h3>
                                <p className="secondTitle">{movieDetail.enm}</p>
                                {this.getRating(movieDetail)}
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
                    <div className={setShowMoreButtonState ? "movie-summary show" : "movie-summary hide"} dangerouslySetInnerHTML={{ __html: movieDetail.dra }} />
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
        let { getMovingInfo, checkActorInfo} = this.props;
        return (
            <div>
                {!_.isEmpty(getMovingInfo) ? this.getMovieContent() : ""}
                <ActorList {...this.props} />
                {!_.isEmpty(checkActorInfo) ? <ActorInfo {...this.props} /> : ""}
            </div>
        )
    }
}