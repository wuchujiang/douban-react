import React,{Component} from 'react';
import {Button, TextareaItem} from 'antd-mobile';

export default class Score extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="score">
                <div className="score-num"></div>
                <p className="score-describe"></p>
                <div className="score-icon"></div>
                <TextareaItem
                    placeholder="快来说说你的看法吧（6-300个字"
                    rows={5}
                    count={300}
                />
                <Button className="btn" type="primary">提交</Button>
            </div>
        )
    }
}