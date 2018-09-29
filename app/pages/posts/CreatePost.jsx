import React, { Component } from 'react'
import picture from '../../assets/picture.png'
import send from '../../assets/send.png'
import '../../stylesheets/createPost.scss'
import { Link } from 'react-router'
import FormData from 'form-data'
import { readCookie, USER_ID_COOKIE } from '../../utils/cookieHelpers'


export default class CreatePost extends Component {

	constructor(props) {
		super(props)
		this.state = {
			title: '',
			content: '',
			userId: readCookie(USER_ID_COOKIE),
			errorMessage: '',
			validTitle: false,
			validContent: false,
			numberOfFiles: '',
		}
	}

	render() {
		if (this.props.userSigninState.signedIn === true) {
			if(this.props.postState.success) {
				return(<div><p>{this.props.postState.message}</p></div>)
			}
			return (<div className="container">
				<div>{this.state.errorMessage}</div>
				<div className="col-lg-9 col-md-9">
					<label>Enter the title...</label>
					<input className="form-control form-field-first"
						aria-label="title"
						placeholder="title"
						type="text"
						onChange={this.handleChangeTitle.bind(this)}
					/>
				</div>
				<div className="col-lg-9 col-md-9">
					<label>Enter the subject content...</label>
					<input className="form-control form-field-first"
						aria-label="content"
						placeholder="content"
						type="textarea"
						id="post-content-input"
						onChange={this.handleChangeContent.bind(this)}
					/>
				</div>
				<div className="col-lg-9 col-md-9">
					<p id="end-page">
						<label className="btn" id="picture-button" >
							<input type="file"
								accept="image/jpg, image/png, image/jpeg"
								multiple
								onChange={this.handleChangeFiles.bind(this)}
							/>
							<img src={picture} className="add-picture-btn" />
							Add photos {this.state.numberOfFiles}
						</label>
						<button className="btn" id="send-post"
							disabled={!(this.state.validTitle && this.state.validContent)}
							onClick={this.handleClickSend.bind(this)} >
							<img src={send} className="send-btn" />
						</button>
					</p>
				</div>
			</div>)
		}
		return (
			<div>
				<center>
					<p>Please sign in first before creating post</p>
					<Link to='/users/signin'>Sign in here</Link>
				</center>
			</div>)
	}

	handleChangeFiles(event) {
		event.preventDefault()
		if (event.target.files.length !== 0) {
			this.setState({
				numberOfFiles: `: ${event.target.files.length} selected`,
			})
			const files = new FormData()
			for (let i = 0; i < event.target.files.length; i++) {
				files.append("files", event.target.files[i])
			}
			this.props.uploadFilesHandler(files)
		} else {
			this.setState({
				numberOfFiles: '',
			})
		}
	}

	handleChangeTitle(event) {
		this.setState({
			title: event.target.value,
		})
		if (event.target.value.length === 0) {
			this.setState({
				errorMessage: 'Title is required',
				validTitle: false,
			})
		} else {
			this.setState({
				errorMessage: '',
				validTitle: true,
			})
		}
	}

	handleChangeContent(event) {
		this.setState({
			content: event.target.value,
		})
		if (event.target.value.length === 0) {
			this.setState({
				errorMessage: 'Content is required',
				validContent: false,
			})
		} else {
			this.setState({
				errorMessage: '',
				validContent: true,
			})
		}
	}

	handleClickSend(event) {
		event.preventDefault()
		let title = this.state.title
		let content = this.state.content
		let filepath = []
		let userId = 'abc123'
		if (this.state.numberOfFiles !== '' && this.props.filesUploadState.success) {
			filepath = this.props.filesUploadState.filepath
		}
		if(this.state.validTitle && this.state.validContent && userId) {
			this.props.createPostHandler(title, content, userId, filepath)
		}
	}
}