import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MainBody from './mainBody';
import * as listActions from '../../state/list/actions';
import _ from 'lodash';

class List extends Component {
    render() {
        return (
            <div>
               <MainBody {...this.props} />
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            counter: state.list.counter
        };
    },
    (dispatch) => {
        let actions = {};
        _.assign(actions, listActions);
        return { actions: bindActionCreators(actions, dispatch) }
    }
)(List);