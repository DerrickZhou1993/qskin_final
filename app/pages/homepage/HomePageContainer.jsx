import React, { Component } from 'react'
import Banner from './Banner'
import CreatePost from '../posts/CreatePost'
import PostsList from '../posts/PostsList'
import { connect } from 'react-redux'

class HomePageContainer extends Component {

	render() {
		return (
			<div>
				<Banner/>
				<CreatePost
					userSigninState={this.props.userSigninState}/>
				<PostsList/>
			</div>
		)
	}
}

function select(state) {
	return {
		userSigninState: state.userSigninState,
	}
}

export default connect(select)(HomePageContainer)