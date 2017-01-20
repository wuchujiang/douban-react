import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button, NavBar, TabBar, Icon, Toast} from 'antd-mobile';
import {Link} from 'react-router';
import _ from 'lodash';

class TarBar extends Component {
    jumpPage(type) {
        if (type == 1) {
            window.location.hash = '#';
        } else if (type == 2) {
            window.location.hash = '#cinema';
        } else if (type == 3) {
            window.location.hash = '#about';
        }
      
    }
    render() {
        return (
            <div>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    >
                    <TabBar.Item
                        title="电影"
                        key="电影"
                        onPress={e => {this.jumpPage(1)}}
                        icon={{uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
                        selected={this.props.hashActive === '#/'}
                        badge={1}
                        data-seed="logId">
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
                        selected={this.props.hashActive === '#/cinema'}
                        title="影院"
                        key="影院"
                        onPress={e => {this.jumpPage(2)}}
                        data-seed="logId1">
                    </TabBar.Item>
                    <TabBar.Item
                        icon={< div style = {{ width: '0.44rem', height: '0.44rem', background: 'url(https://zos.alipayobjects.com/rmsportal/WdEuTLJOVzeABZlKYLmJ.png) center center / 0.44rem 0.35rem no-repeat' }}/>}
                        selectedIcon={< div style = {{ width: '0.44rem', height: '0.44rem', background: 'url(https://zos.alipayobjects.com/rmsportal/sRkvMgIGXERtyRVyAsXP.png) center center / 0.44rem 0.35rem no-repeat' }}/>}
                        title="关于"
                        key="关于">
                    </TabBar.Item>
                </TabBar>
            </div>

        )
    }
}

export default connect((state) => {
    return {};
}, (dispatch) => {
    let actions = {};
    _.assign(actions);
    return {
        actions: bindActionCreators(actions, dispatch)
    }
})(TarBar);