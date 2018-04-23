import React, { Component } from 'react'
import { connect } from 'react-redux'
import SigninForm from './SigninForm'
import { signin } from "../../../actions/userActions"

//7 todos here.

//todo1: import the signin function from userActions

//todo7: change the class declaration to NOT export as default class.
//tips: check out pages/signout/SignoutContainer.jsx 
export default class SigninContainer extends Component {
	render() {
		//
		return (
			<div>
				<SigninForm
					//todo 3: pass this.signinHandler as a props. Remember binding.
					//todo 5: pass this.props.userSigninState as a props
				/>
			</div>
		)
	}

	signinHandler(email, password) {
		//todo2: complete the signinHandler method here. The method should call the 
		//signin function with these input.
	}
}

function select(state) {
	return {
		//todo4: add required userSigninState here.
	}
}

//todo6: connect the select function and the container, and export the outcome as default class.
//tips: check out pages/users/signout/SignoutContainer.jsx 