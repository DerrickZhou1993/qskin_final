import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreatePost from './CreatePost'
import { uploadFiles, createPost } from '../../actions/postActions'

class PostsContainer extends Component {
	render() {
		return (
			<div>
				<CreatePost
					userSigninState = {this.props.userSigninState}
					uploadFilesHandler = {this.uploadFilesHandler.bind(this)}
					filesUploadState = {this.props.filesUploadState}
					createPostHandler = {this.createPostHandler.bind(this)}
				/>
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
	}
}

export default connect(select)(PostsContainer)