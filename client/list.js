import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {Router, Route, hashHistory } from 'react-router';
import ReactDom from 'react-dom';

import createReduxStore from 'client/state/list/';
import List from 'client/components/list/';
import 'assets/public.scss';
let store = createReduxStore(window.__state);

export default class ListPage extends Component {
	
	render() {
		console.log(this.props);
		return (
			<Provider store={store}>
		        <List listId={this.props.location.query.id} title={this.props.location.query.title} />
		    </Provider>
		)
	}
}
