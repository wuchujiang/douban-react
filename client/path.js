import React from 'react';
import {render} from 'react-dom';

import {Router, Route, hashHistory } from "react-router";

import AppPage from 'client/app';
import ListPage from 'client/list';
import VideoPage from 'client/video';

render((
	<Router history={hashHistory}>
		<Route path="/" component={AppPage}></Route>
		<Route path="/list(/:name)" component={ListPage}></Route>
		<Route path="/video(/:name)" component={VideoPage}></Route>
	</Router>
), document.getElementById("root"))