import React,{Component } from 'react';

import _ from 'lodash';

export default class ActorInfo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        let actorInfo = this.props.checkActorInfo;
        return (
            <div className="actorInfo">
                <div onClick={e => {
                    this.props.actions.checkActorInfo();
                }} className="actorInfo-mask"></div>
                <div className="actorInfo-detail">
                    <div className="actorInfo-content">
                        <h3>{actorInfo.cnm}</h3>
                        <p className="second-name">{actorInfo.enm}</p>
                        <p className="actor-name">{actorInfo.cr == 2 ? "导演" : '饰:' + actorInfo.roles }</p>
                    </div>
                    <div className="actorInfo-img">
                     {actorInfo.still ?  <img src={actorInfo.still.replace("/w.h","")} alt=""/> : ""}    
                    </div>
                </div>
            </div>
        )
    }
}