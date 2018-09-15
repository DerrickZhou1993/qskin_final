import React, { Component } from 'react'
import { Link } from 'react-router'
export default class UserProfileButton extends Component {

	render() {
		if (this.props.userSigninState.signedIn) {
			return (<div className="container">
				<div>
					{<Link to="/users/me">
						<button className="btn btn-primary" id="profileButton" type="button" >USER PROFILE</button>
					</Link>
					}
				</div>
			</div>)
		}
		return (<div></div>)
	}
}