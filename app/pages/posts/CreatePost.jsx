import React, { Component } from 'react'
import picture from '../../assets/picture.png'
import send from '../../assets/send.png'
import '../../stylesheets/createPost.scss'

export default class CreatePost extends Component {

	render() {
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
}