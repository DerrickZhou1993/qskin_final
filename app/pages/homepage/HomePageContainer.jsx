import React, { Component } from 'react'
import Banner from './Banner'
import CreatePost from '../posts/CreatePost'
import PostsList from '../posts/PostsList'
import { connect } from 'react-redux'
import { uploadFiles, createPost } from '../../actions/postActions'

class HomePageContainer extends Component {

	render() {
		return (
			<div>
				<Banner/>
				<CreatePost
					userSigninState = {this.props.userSigninState}
					uploadFilesHandler = {this.uploadFilesHandler.bind(this)}
					filesUploadState = {this.props.filesUploadState}
					createPostHandler = {this.createPostHandler.bind(this)}
					postState = {this.props.postState}
				/>
				<PostsList/>
			</div>
		)
	}

	uploadFilesHandler(files){
		this.props.dispatch(uploadFiles(files))
	}

	createPostHandler(title, content, userId, filepath) {
		this.props.dispatch(createPost(title, content, userId, filepath))
	}
}

function select(state) {
	return {
		userSigninState: state.userSigninState,
		filesUploadState: state.filesUploadState,
		postState: state.postState,
	}
}

export default connect(select)(HomePageContainer)