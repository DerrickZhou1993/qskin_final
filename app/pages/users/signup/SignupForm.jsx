import React, { Component } from 'react'
import { Link } from 'react-router'
import { validateEmail } from '../../../utils/validationHelpers'

//16 todos here.

export default class SignupForm extends Component {
	constructor(props) {
		super(props)
		//todo1: add page states here.
		//State include: email(''), password(''), firstName(''), middleName(''), lastName(''), consented(false), 
		//errorMessage(''), validEmail(false), validPassword(false), validFirstName(false), and validLastName(false). 
		//Their default values are inside the brackets.
	}

	render() {
		//todo16: Change the following codes, so that if this.props.userSignupState.signedUp is true, return a new <div> that shows 
		//only a <p>sign in successful</p> page. Otherwise, return below codes.
		return (<div>
			<form id="signupForm" name="signupForm">
				<div>{this.state.errorMessage}</div>
				<div>
					<input aria-label="firstname"
						placeholder="Provide a first name" 
						type="text"
						//todo2: add the value attribute for firstName filed
						//todo3: add onChange attribute to call the this.handleChangeFirstName method with no param
						/>
				</div>
				<div>
					<input aria-label="middle"
						placeholder="Provide a middle name" 
						type="text"
						//todo4: add the value attribute for middleName filed
						//todo5: add onChange attribute to call the this.handleChangeMiddleName method with no param
						/>
				</div>
				<div>
					<input aria-label="lastname"
						placeholder="Provide a last name" 
						type="text"
						//todo6: add the value attribute for lastName filed
						//todo7: add onChange attribute to call the this.handleChangeLastName method with no param
						/>
				</div>
				<div>
					<input aria-label="email"
						placeholder="Provide your email" 
						type="email"
						//todo8: add the value attribute for email filed
						//todo9: add onChange attribute to call the this.handleChangeEmail method with no param
						/>
				</div>
				<div>
					<input aria-label="password"
						placeholder="Create a new password" 
						type="password"
						//todo10: add the value attribute for password filed
						//todo11: add onChange attribute to call the this.handleChangePassword method with no param
						/>
				</div>
				<div>
					<div>
						<input type="checkbox"
							//todo12: add the checked attribute for consented filed
							//todo13: add onChange attribute to call the this.handleChangeAgreement method with no param
							/>
						<span className="privacy-text">
							I agree to receive electronic messages from Projek and its affiliates, 
							including information about our services and offers.
						</span>
					</div>
				</div>
				<div>
					<button type="submit"
						//todo14: add dsiabled attribute that uses the opposite of the state's (validEmail && validPassword
						// && validFirstName && validLastName)
						// syntax for disabled attribute: 
						//disabled={$value}

						//todo15: add onclick to call the this.handleClickSignUp method with no param
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
		if (this.state.firstName.length === 0) {
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
		if (this.state.lastName.length === 0) {
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
		this.setState({
			email: event.target.value,
		})
		if (validateEmail(this.state.email)) {
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
		if (this.state.password.length === 0) {
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