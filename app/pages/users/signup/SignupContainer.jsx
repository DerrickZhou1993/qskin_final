import React, {Component} from 'react'
import { connect } from 'react-redux'
import SignupForm from './SignupForm'
import { signup } from "../../../actions/userActions"

//7 todos here.

//todo1: import the signup function from userActions

//todo7: change the class declaration to NOT export as default class.
//tips: check out pages/signout/SignoutContainer.jsx 
export default class SignupContainer extends Component {
	render() {
		return (
			<div>
				<SignupForm
					//todo 3: pass this.signupHandler as a props
					//todo 5: pass this.props.userSigninState as a props
				/>
			</div>
		)
	}

	signupHandler(firstName, middleName, lastName, email, password, consented) {
		//todo2: complete the signupHandler method here. The method should call the 
		//signup function with these input.
	}
}

function select(state) {
	return {
		//todo4: add required userSigninState here.
	}
}

//todo6: connect the select function and the container, and export the outcome as default class.
//tips: check out pages/users/signout/SignoutContainer.jsx 