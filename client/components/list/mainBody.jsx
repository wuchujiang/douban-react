import React, {Component} from 'react';
import { Button, Icon, Toast, Modal } from 'antd-mobile';
import _ from 'lodash';
import ActorList from './actorList';
import ActorInfo from './actorInfo';
import MovePhoto from './movePhoto';

import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video';
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

    checkReadState() {
        let hasReadMove = this.props.hasReadMove;
        let alert = Modal.alert;
        if(hasReadMove == 1){
            this.props.actions.hasReadMove(2);
            Toast.info('已标记想看', 1.5);
        }else if(hasReadMove == 2){
            this.props.actions.hasReadMove(1);
            Toast.info('已取消想看', 1.5);
        }else if(hasReadMove == 3){
            alert('是否取消看过', '若取消看过，您的评分也将被删除', [
                    { text: '取消',style: 'default' },
                    { text: '确定', onPress: () => {
                        this.props.actions.hasReadMove(1);
                    }, style: { fontWeight: 'bold' } },
                ]
            )
        }
    }

    jumpToScroe() {
        this.props.actions.scoreCounter({show: !this.props.scoreCounter.show});
    }
       
    getMovieContent() {
        let { getMovingInfo, setShowMoreButtonState, hasReadMove, scoreCounter} = this.props;
        let movieDetail = getMovingInfo.data.movie;
        return (
            <div>
                <div className="movie-box">
                    <div className="movie-background"  style={{"backgroundImage": "url(" + movieDetail.img.replace("/w.h","") + ")"}} ></div>
                    <div className="movie-filter"></div>    
                    <div className="movie-content">
                        <div className="movie-content-body">
                            <div className="movie-pic">
                                <div className="img-wrap">
                                    <img src={movieDetail.img.replace("/w.h", "")} alt="" />
                                </div>
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
                            <button onClick={e => {this.checkReadState();}} className={hasReadMove != 1 ? "active" : "love"}><Icon type="heart" />{hasReadMove == 1 ? "想看" : hasReadMove == 2 ? "已想看" : "看过"}</button>
                            <button onClick={e => { this.jumpToScroe(); } } className={scoreCounter.score > 0 ? 'do' : 'did'}><Icon type="star" />{scoreCounter.score > 0 ? scoreCounter.score + '分，' + scoreCounter.describe : '评分'  }</button>
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
        let { getMovingInfo, checkActorInfo, movePhoto} = this.props;
        return (
            <div>
                {!_.isEmpty(getMovingInfo) ? this.getMovieContent() : ""}
                <ActorList {...this.props} />
                {!_.isEmpty(checkActorInfo) ? <ActorInfo {...this.props} /> : ""}
                <MovePhoto {...this.props} />
                <Video controls autoPlay loop muted
                poster="http://p1.meituan.net/movie/f5cab6f0ff5c71f43fbef9a33a28835828406.jpg"
                onCanPlayThrough={() => {
                    // Do stuff
                }}>
                    <source src="http://maoyan.meituan.net/movie/videos/854x480b5967b4fbb2242f8a62e24f367e29a9c.mp4" type="video/mp4" />
                </Video>
            </div>
        )
    }
}