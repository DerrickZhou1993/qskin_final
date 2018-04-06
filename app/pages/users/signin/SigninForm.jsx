import React, { Component } from 'react'
import { Link } from 'react-router'

export default class SigninForm extends Component {

	render() {
		return (<div>
			<form id="signinForm" name="signupForm">
				<div>
					<input aria-label="email"
						placeholder="Provide your email" 
						type="email"/>
				</div>
				<div>
					<input aria-label="password"
						placeholder="Create a new password" 
						type="password"/>
				</div>
				<div>
					<button type="submit">
						<span>Sign in</span>
					</button>
				</div>
			</form>
			<div>
				Don't have an account yet? <Link to="/user/signup">Click to sign up.</Link>
			</div>
			</div>)
	}
}