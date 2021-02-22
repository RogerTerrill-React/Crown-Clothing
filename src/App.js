import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Homepage from './pages/homepage';
import ShopPage from './pages/shop';
import SignIn from './pages/signin';
import Header from './components/Header';
import { setCurrentUser } from './redux/user/userActions';

function App({ setCurrentUser, currentUser }) {
	useEffect(() => {
		setCurrentUser('Roger');
	});
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route path='/shop' component={ShopPage} />
				<Route exact path='/signin'>
					{currentUser ? <Redirect to='/' /> : <SignIn />}
				</Route>
			</Switch>
		</div>
	);
}

const mapStateToProps = ({ user }) => {
	return {
		currentUser: user.currentUser,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
