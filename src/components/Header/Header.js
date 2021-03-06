import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = ({ currentUser }) => {
	return (
		<div className='header'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/shop'>
					CONTACT
				</Link>
				{currentUser ? `Hi ${currentUser}` : 'SignedOut'}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.user.currentUser,
	};
};
export default connect(mapStateToProps)(Header);
