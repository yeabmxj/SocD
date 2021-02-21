import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Skeleton from './components/pages/Skeleton';
import About from './components/pages/About'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Skeleton} />
		<Route path="/about" component={About} />
	</Route>
);