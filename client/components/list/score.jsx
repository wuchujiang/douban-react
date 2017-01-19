import React, { Component } from 'react';
import _ from 'lodash';
import {Button, TextareaItem, Icon, Toast} from 'antd-mobile';

export default class Score extends Component{
    constructor(props) {
        super(props);
    }

    clickScore(i) {
        let describe = ['请滑动星星评分','垃圾电影', '浪费时间', '一般般', '还可以', '棒极了'];
        this.props.actions.scoreCounter({ score: i + 1, describe: describe[i+1] });

        
    }

    scoreStar() {
        let starArr = [];
        let scoreCounter = this.props.scoreCounter;
        for (let i = 0; i < 5; i++){
            starArr.push(
                <Icon key={_.uniqueId()} onClick={e => {this.clickScore(i)}} type='star' className={scoreCounter.score <= i ? 'star' : 'star-o'} />
            )
        }
        return starArr;
    }

    submitHandle() {
        if (this.props.scoreCounter.score == 0) return false;
        Toast.success('评论成功!!!', 1.5, () => {
            this.props.actions.scoreCounter({ show: !this.props.scoreCounter });
            this.props.actions.hasReadMove(3);
        });
        
    }

    render() {
        let {scoreCounter} = this.props;
        return (
            <div className="score">
                <div className="score-num">{scoreCounter.score}<span>分</span></div>
                <p className="score-describe">{scoreCounter.describe}</p>
                <div className="score-icon">{this.scoreStar()}</div>
                <TextareaItem
                    placeholder="快来说说你的看法吧（6-300个字）"
                    rows={5}
                    count={300}
                />
                <Button className={scoreCounter.score == 0 ? 'disabled btn' : "btn"} onClick={e => {this.submitHandle()}} type="primary">提交</Button>
            </div>
        )
    }
}