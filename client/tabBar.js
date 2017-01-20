import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {Router, Route, hashHistory } from 'react-router';
import ReactDom from 'react-dom';
import createReduxStore from 'client/state/tabBar/';
import TabBar from 'client/components/tabBar/';
import 'assets/public.scss';
let store = createReduxStore(window.__state);

export default class TabBarPage extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<TabBar hashActive={window.location.hash} />
					{this.props.children}
				</div>	
		    </Provider>
		)
	}
}
