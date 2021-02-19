import React, { useState } from 'react';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
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
		setCredentials({ ...credentials, [name]: value });
	};

	const { email, password } = credentials;
	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					name='email'
					type='email'
					value={email}
					label='email'
					handleChange={handleChange}
					required
				/>
				<FormInput
					name='password'
					type='password'
					value={password}
					label='password'
					handleChange={handleChange}
					required
				/>

				<CustomButton type='submit'> Sign In </CustomButton>
			</form>
		</div>
	);
};

export default SignIn;
