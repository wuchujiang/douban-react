import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {Router, Route, hashHistory } from 'react-router';
import ReactDom from 'react-dom';

import createReduxStore from 'client/state/app/';
import App from 'client/components/app/';
let store = createReduxStore(window.__state);

export default class AppPage extends Component {
	render() {
		return (
			<Provider store={store}>
		        <App />
		    </Provider>
		)
	}
}
