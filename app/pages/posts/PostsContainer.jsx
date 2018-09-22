import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreatePost from './CreatePost'

class PostsContainer extends Component {
	render() {
		return (
			<div>
				<CreatePost
					userSigninState={this.props.userSigninState}
				/>
			</div>
		)
	}
}

function select(state) {
	return {
		userSigninState: state.userSigninState,
	}
}

export default connect(select)(PostsContainer)