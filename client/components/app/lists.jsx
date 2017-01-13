import React, { Component } from 'react';

import { Card, WhiteSpace } from 'antd-mobile';
export default class ListItem extends Component {
    render() {
        return (
            <div>
                <WhiteSpace size="lg" />
                <Card full>
                <Card.Header
                    title={this.props.title}
                    thumb={this.props.thumb}
                    extra={<span>{this.props.smallTitle}</span>}
                />
                <Card.Body>
                    <div>{this.props.content}</div>
                </Card.Body>
                <Card.Footer content="这是卡尾" extra={<div>{this.props.footContent}</div>} />
                </Card>
            </div>
        )
    }
}