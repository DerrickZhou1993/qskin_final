import React, { Component } from 'react'
import loading from '../../../assets/loading.gif'

export default class SignoutPage extends Component {

	render() {

		return (
			<div>
				<div>
					<p>You have signed out successfully.</p>
				</div>
				<div>
					<img src={loading} />
				</div>
			</div>
		)
	}
}