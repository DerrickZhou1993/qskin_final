import React, { Component } from 'react'
import Banner from './Banner'
import CreatePost from '../posts/CreatePost'
import PostsList from '../posts/PostsList'
import { connect } from 'react-redux'
import { uploadFiles } from '../../actions/postActions'
import { listposts } from '../../actions/postActions'

class HomePageContainer extends Component {

	componentWillMount() {
		this.props.dispatch(listposts())
	}
	render() {
		console.log(this.props.userSigninState)
		return (
			<div>
				<Banner />
				<CreatePost
					userSigninState={this.props.userSigninState}
					uploadFilesHandler={this.uploadFilesHandler.bind(this)}
					filesUploadState={this.props.filesUploadState}
				/>
				<PostsList 
					userSigninState={this.props.userSigninState}
					listPostsState={this.props.listPostsState} />
			</div>
		)
	}

	uploadFilesHandler(files) {
		this.props.dispatch(uploadFiles(files))
	}
}

function select(state) {
	return {
		userSigninState: state.userSigninState,
		filesUploadState: state.filesUploadState,
		listPostsState: state.listPostsState,
	}
}

export default connect(select)(HomePageContainer)