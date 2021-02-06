import React, { useState } from 'react';
import './SignIn.scss';

const SignIn = () => {
	const INITIAL_STATE = { email: '', password: '' };
	const [credentials, setCredentials] = useState(INITIAL_STATE);

	const handleSubmit = (event) => {
		event.preventDefault();
		setCredentials(INITIAL_STATE);
	};

	const handleChange = (event) => {
		const { value, name } = event.target;
		setCredentials({ [name]: value });
	};

	const { email, password } = credentials;
	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<input
					name='email'
					type='email'
					value={email}
					onChange={handleChange}
					required
				/>
				<label>Email</label>
				<input
					name='password'
					type='password'
					value={password}
					onChange={handleChange}
					required
				/>
				<label>Password</label>

				<input type='submit' value='Submit Form' />
			</form>
		</div>
	);
};

export default SignIn;
