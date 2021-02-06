import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage';
import ShopPage from './pages/shop';
import SignIn from './pages/signin';
import Header from './components/Header';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route exact path='/signin' component={SignIn} />
			</Switch>
		</div>
	);
}

export default App;
