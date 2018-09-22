import React, { Component } from 'react'
import picture from '../../assets/picture.png'
import send from '../../assets/send.png'
import '../../stylesheets/createPost.scss'
import { Link } from 'react-router'


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
}