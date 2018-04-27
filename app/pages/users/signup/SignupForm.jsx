import React, { Component } from 'react'
import { Link } from 'react-router'
import { validateEmail } from '../../../utils/validationHelpers'

export default class SignupForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			firstName: '',
			middleName: '',
			lastName: '',
			consented: false,
			errorMessage: '',
			validEmail: false,
			validPassword: false,
			validFirstName: false,
			validLastName: false,
		}
	}

	render() {
		if (this.props.userSignupState.signedUp) {
			return (<div><p>sign in successful</p></div>)
		}
		return (
			<div>
				<form id="signupForm" name="signupForm">
					<div>{this.state.errorMessage}</div>
					<div>
						<input aria-label="firstname"
							placeholder="Provide a first name" 
							type="text"
							value={this.state.firstName}
							onChange={this.handleChangeFirstName.bind(this)}
							/>
					</div>
					<div>
						<input aria-label="middle"
							placeholder="Provide a middle name" 
							type="text"
							value={this.state.middleame}
							onChange={this.handleChangeMiddleName.bind(this)}
							/>
					</div>
					<div>
						<input aria-label="lastname"
							placeholder="Provide a last name" 
							type="text"
							value={this.state.lastName}
							onChange={this.handleChangeLastName.bind(this)}
							/>
					</div>
					<div>
						<input aria-label="email"
							placeholder="Provide your email" 
							type="email"
							value={this.state.email}
							onChange={this.handleChangeEmail.bind(this)}
							/>
					</div>
					<div>
						<input aria-label="password"
							placeholder="Create a new password" 
							type="password"
							value={this.state.password}
							onChange={this.handleChangePassword.bind(this)}
							/>
					</div>
					<div>
						<div>
							<input type="checkbox"
								checked={this.state.consented}
								onChange={this.handleChangeAgreement.bind(this)}
								/>
							<span className="privacy-text">
								I agree to receive electronic messages from Projek and its affiliates, 
								including information about our services and offers.
							</span>
						</div>
					</div>
					<div>
						<button type="submit"
							disabled={!(this.state.validEmail && this.state.validPassword 
										&& this.state.validFirstName && this.state.validLastName)} 
							onClick={this.handleClickSignup.bind(this)} 
							>
							<span>Sign up</span>
						</button>
						<div>
							<p>By clicking "Sign up" above, you agree to our User Agreement and Privacy Policy.</p>
						</div>
					</div>
				</form>
				<div>
					Already have an account with us? <Link to="/user/signin">Click to sign in.</Link>
				</div>
			</div>)
	}


	handleChangeFirstName(event) {
		this.setState({
			firstName: event.target.value,
		})
		if (event.target.value.length === 0) {
			this.setState({
				errorMessage: 'First name is required',
				validFirstName: false,
			})
		} else {
			this.setState({
				errorMessage: '',
				validFirstName: true,
			})
		}
	}

	handleChangeMiddleName(event) {
		this.setState({
			middleName: event.target.value,
		})
	}

	handleChangeLastName(event) {
		this.setState({
			lastName: event.target.value,
		})
		if (event.target.value.length === 0) {
			this.setState({
				errorMessage: 'Last name is required',
				validLastName: false,
			})
		} else {
			this.setState({
				errorMessage: '',
				validLastName: true,
			})
		}
	}

	handleChangeEmail(event) {
		//window.console.log(event.target.value)
		this.setState({
			email: event.target.value,
		})
		if (!validateEmail(event.target.value)) {
			this.setState({
				errorMessage: 'Email format error.',
				validEmail: false,
			})
		} else {
			this.setState({
				errorMessage: '',
				validEmail: true,
			})
		}
	}

	handleChangePassword(event) {
		this.setState({
			password: event.target.value,
		})
		if (event.target.value.length === 0) {
			this.setState({
				errorMessage: 'Password is required',
				validPassword: false,
			})
		} else {
			this.setState({
				errorMessage: '',
				validPassword: true,
			})
		}
	}

	handleChangeAgreement(event) {
		this.setState({
			consented: event.target.checked,
		})
	}

	handleClickSignup(event) {
		event.preventDefault()
		let firstName = this.state.firstName
		let middleName = this.state.middleName
		let lastName = this.state.lastName
		let email = this.state.email
		let password = this.state.password
		let consented = false
		if (this.state.consented) {
			consented = true
		}
		if (this.state.validEmail && this.state.validPassword 
					&& this.state.validFirstName && this.state.validLastName) {
			this.props.signupHandler(firstName, middleName, lastName, email, password, consented)
		}
	}
}