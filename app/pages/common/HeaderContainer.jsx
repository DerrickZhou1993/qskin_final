import React, { Component } from 'react'
import UserProfileButton from '../users/profile/UserProfileButton'
import { connect } from 'react-redux'
 class HeaderContainer extends Component {

	render() {
		return (<div className="container">
			header place holder
			<UserProfileButton userSigninState = {this.props.userSigninState}/>
		</div>)
	}
}
function select(state) {
	return {
		userSigninState: state.userSigninState,
	}
}

export default connect(select)(HeaderContainer)