import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {Router, Route, hashHistory } from 'react-router';
import ReactDom from 'react-dom';

import createReduxStore from 'client/state/cinema/';
import Cinema from 'client/components/cinema/';
import 'assets/public.scss';
let store = createReduxStore(window.__state);

export default class CinemaPage extends Component {
	render() {
		return (
			<Provider store={store}>
		        <Cinema />
		    </Provider>
		)
	}
}
