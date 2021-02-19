import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Homepage from './pages/homepage';
import ShopPage from './pages/shop';
import SignIn from './pages/signin';
import Header from './components/Header';
import { setCurrentUser } from './redux/user/userActions';

function App({setCurrentUser}) {
	useEffect(() => {
		setCurrentUser('RogerT');
	})
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

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	};
};
export default connect(null, mapDispatchToProps)(App);
