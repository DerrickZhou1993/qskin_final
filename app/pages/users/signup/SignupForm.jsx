import React, { Component } from 'react'
import { Link } from 'react-router'

export default class SignupForm extends Component {

	render() {
		return (<div>
			<form id="signupForm" name="signupForm">
				<div>
					<input aria-label="firstname"
						placeholder="Provide a first name" 
						type="text"/>
				</div>
				<div>
					<input aria-label="middle"
						placeholder="Provide a middle name" 
						type="text"/>
				</div>
				<div>
					<input aria-label="lastname"
						placeholder="Provide a last name" 
						type="text"/>
				</div>
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
					<div>
						<input type="checkbox"/>
						<span className="privacy-text">
							I agree to receive electronic messages from Wherego LTD and its affiliates, 
							including information about our services and offers.
						</span>
					</div>
				</div>
				<div>
					<button type="submit">
						<span>Sign up</span>
					</button>
					<div>
						<p>By clicking "Sign up" above, you agree to our 
							<a href="https://s3.amazonaws.com/cdn.wewherego.com/docs/WhereGoUserAgreement_v1.pdf">
								User Agreement</a> and 
							<a href="https://s3.amazonaws.com/cdn.wewherego.com/docs/WhereGo_Privacy_v1.pdf">
								Privacy Policy</a>.
						</p>
					</div>
				</div>
			</form>
			<div>
				Already have an account with us? <Link to="/user/signin">Click to sign in.</Link>
			</div>
			</div>)
	}
}