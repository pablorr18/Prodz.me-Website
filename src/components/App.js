import React, { Component } from 'react';
import {Container,Row,Col} from 'reactstrap';
import { Route } from 'react-router-dom';

import './styles/App.css';
import Sidebar from './Sidebar';
import Portfolio from './Portfolio';
import Details from './ItemDetails';
import About from './About';
import Contact from './Contact';
import MobileNavBar from './NavBar';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import portfolioReducer from '../redux/reducers/portfolio.reducer';


//MIDDLEWARE
let middleware = [thunk];
const history = createHistory();
const routerMW = routerMiddleware(history);

middleware = [...middleware, routerMW];

//ONLY FOR DEBUGGING
if (process.env.NODE_ENV !== 'production') {
	const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
	const logger = createLogger({ collapsed: true });
	middleware = [...middleware, reduxImmutableStateInvariant, logger];
} 
else {
	middleware = [...middleware];
}

//CREATE STORE
const store = createStore(
	combineReducers({
		portfolio:portfolioReducer,
		router: routerReducer
	}),
	applyMiddleware(...middleware)
);

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<div>
						<MobileNavBar />
						<Container fluid>
							<Row>
								<Col sm="3" md="3" lg="3" xl="2" className="sidebar hidden-xs-down">
									<Sidebar />
								</Col>
								<Col sm="9" md="9" lg="9" xl="10" className="main-content offset-sm-3 offset-md-3 offset-lg-3 offset-xl-2">
									<Route exact={true} path="/" component={Portfolio}/>
									<Route exact={true} path="/portfolio" component={Portfolio}/>
									<Route path="/about" component={About}/>
									<Route path="/contact" component={Contact}/>
									<Route path="/portfolio/:slug" component={Details}/>
								</Col>
							</Row>
						</Container>
					</div>
				</ConnectedRouter>
			</Provider>
		);
	}
}

export default App;
