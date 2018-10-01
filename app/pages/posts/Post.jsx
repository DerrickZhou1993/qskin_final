import React, { Component } from 'react'
require ('../../stylesheets/post.scss')

import likeURL from '../../assets/icons/Like.png'
import commentURL from '../../assets/icons/Comment.png'
import bookmarkURL from '../../assets/icons/Bookmark.png'



export default class Post extends Component {

	render() {
		return (<div className = "postcontainer col-sm-12">
					<div className = "titleLine">		
						<h2 className= "col-sm-10"> {this.props.title} </h2>
						<div className="dropdown col-sm-2">
							<button className="dropbtn">...</button>
							<div className="dropdown-content">
							<a href="#">Notification about this post</a>
							<a href="#">Hide this post</a>
							<a href="#">Report this post</a>
							</div>
						</div>
					</div>	
					<div className = "authorInfo col-sm-12">
						<img src={this.props.userAvatar} className="user-avatar" />
						<div className="userName"> {this.props.userName} </div>
						<div className="userTime"> {this.props.time} </div>	
					</div>

					<div className="content col-sm-12"> {this.props.content} </div>
					<div className="col-sm-12"> {this.props.phtotos} </div>

					<div className="col-sm-8"></div>
					<div className="interaction col-sm-4">
						<img src={bookmarkURL} className="reply-btn" />
						<img src={likeURL} className="like-btn" />
						<div className="info"> {this.props.likeCount} </div>
						<img src={commentURL} className="comment-btn" />
						<div className="info"> {this.props.replyCount} </div>
					</div>

				</div>)
	}
}