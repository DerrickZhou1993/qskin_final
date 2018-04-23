import React, { Component } from 'react'
import { Link } from 'react-router'
import { validateEmail } from '../../../utils/validationHelpers'

//5 todos here.

export default class SigninForm extends Component {
	constructor(props) {
		super(props)
		//todo1: add page states here.
		//State include: email(''), password(''), errorMessage(''), validEmail(false), and validPassword(false). 
		//Their default values are inside the brackets.
	}

	render() {
		//todo5: Change the following codes, so that if this.props.userSigninState.signedIn is true, return a new <div> that shows 
		//only a <p>sign in successful</p> page. Otherwise, return below codes.
		return (<div>
			<form id="signinForm" name="signupForm">
				<div>{this.state.errorMessage}</div>
				<div>
					<input aria-label="email"
						placeholder="Provide your email" 
						type="email"
						//todo2: add the value attribute for email filed
						//todo3: add onChange attribute to call the this.handleChangeEmail method with no param
						/>
				</div>
				<div>
					<input aria-label="password"
						placeholder="Create a new password" 
						type="password"
						//todo3: add the value attribute for password filed
						//todo4: add onChange attribute to call the this.handleChangePassword method with no param
						/>
				</div>
				<div>
					<button type="submit" 
							disabled={!(this.state.validEmail && this.state.validPassword)} 
							onClick={this.handleClickSignup.bind(this)} 
							className="margin-bottom-10 btn col-xs-12 btn-danger">
						<span>Sign in</span>
					</button>
				</div>
			</form>
			<div>
				Don't have an account yet? <Link to="/user/signup">Click to sign up.</Link>
			</div>
			</div>)
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

	handleClickSignIn(event) {
		event.preventDefault()
		let email = this.state.email
		let password = this.state.password
		if (this.state.validEmail && this.state.validPassword) {
			this.props.signinHandler(email, password)
		} else {
			this.setState({
				errorMessage: 'Invalid input. Check email and password.',
			})
		}
	}
}