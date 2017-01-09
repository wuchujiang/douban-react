import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MainBody from './mainBody';
import * as appActions from '../../state/app/actions';
import _ from 'lodash';

class App extends Component {
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
            counter: state.app.counter
        };
    },
    (dispatch) => {
        let actions = {};
        _.assign(actions, appActions);
        return { actions: bindActionCreators(actions, dispatch) }
    }
)(App);