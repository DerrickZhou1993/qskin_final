import React, { Component } from 'react'
import picture from '../../assets/picture.png'
import send from '../../assets/send.png'
import '../../stylesheets/createPost.scss'
import { Link } from 'react-router'
import FormData from 'form-data'


export default class CreatePost extends Component {

	render() {
		if (this.props.userSigninState.signedIn === true) {
			return (<div className="container">
				<div className="col-lg-9 col-md-9">
					<label>Enter the title...</label>
					<input className="form-control form-field-first"
						aria-label="title"
						placeholder="title"
						type="text"
					/>
				</div>
				<div className="col-lg-9 col-md-9">
					<label>Enter the subject content...</label>
					<input className="form-control form-field-first"
						aria-label="content"
						placeholder="content"
						type="textarea"
						id="post-content-input"
					/>
				</div>
				<div className="col-lg-9 col-md-9">
					<p id="end-page">
						<input type="file"
							accept="image/jpg, image/png, image/jpeg"
							multiple
							onChange={this.handleChangeFiles.bind(this)}
						/>
						<button className="btn" id="picture-button">
							<img src={picture} className="add-picture-btn" />
						</button>Add photos
						<button className="btn" id="send-post">
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
			const files = new FormData()
			for (let i = 0; i < event.target.files.length; i++) {
				files.append("files", event.target.files[i])
			}
			this.props.uploadFilesHandler(files)
		}
	}
}