import React from 'react';
import {render} from 'react-dom';

import {Router, Route, hashHistory, IndexRoute } from "react-router";

import AppPage from 'client/app';
import ListPage from 'client/list';
import VideoPage from 'client/video';
import TabBarPage from 'client/tabBar';
import Cinema from 'client/cinema';

render((
	<Router history={hashHistory}>
		<Route path="/" component={TabBarPage}>
			<IndexRoute component={AppPage} />x``
			<Route path="cinema" component={Cinema} />
		</Route>
		<Route path="list" component={ListPage}>
			<Route path="/list/:userId" component={ListPage} />	
		</Route>
		<Route path="video" component={VideoPage}>
			<Route path="/video/:userId" component={VideoPage}/>
		</Route>
	</Router>
), document.getElementById("root"))