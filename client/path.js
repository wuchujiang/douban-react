import React from 'react';
import {render} from 'react-dom';

import {Router, Route, hashHistory } from "react-router";

import AppPage from 'client/app';
import ListPage from 'client/list';

render((
	<Router history={hashHistory}>
		<Route path="/" component={AppPage}></Route>
		<Route path="/list" component={ListPage}></Route>
	</Router>
), document.getElementById("root"))