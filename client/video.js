import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {Router, Route, hashHistory } from 'react-router';
import ReactDom from 'react-dom';
import createReduxStore from 'client/state/video/';
import Video from 'client/components/video/';
import 'assets/public.scss';
let store = createReduxStore(window.__state);

export default class VideoPage extends Component {
	render() {
		return (
			<Provider store={store}>
		        <VideoPage />
		    </Provider>
		)
	}
}
