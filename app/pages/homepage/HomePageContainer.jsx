import React, { Component } from 'react'
import Banner from './Banner'
import CreatePost from '../posts/CreatePost'
import PostsList from '../posts/PostsList'
import { connect } from 'react-redux'
import { uploadFiles } from '../../actions/postActions'

class HomePageContainer extends Component {

	render() {
		return (
			<div>
				<Banner/>
				<CreatePost
					userSigninState = {this.props.userSigninState}
					uploadFilesHandler = {this.uploadFilesHandler.bind(this)}
					filesUploadState = {this.props.filesUploadState}
				/>
				<PostsList/>
			</div>
		)
	}

	uploadFilesHandler(files){
		this.props.dispatch(uploadFiles(files))
	}
}

function select(state) {
	return {
		userSigninState: state.userSigninState,
		filesUploadState: state.filesUploadState,
	}
}

export default connect(select)(HomePageContainer)