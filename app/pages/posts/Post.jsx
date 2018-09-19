import React, { Component } from 'react'
require ('../../stylesheets/post.scss')

import likeURL from '../../assets/icons/Like.png'
import commentURL from '../../assets/icons/Comment.png'
import bookmarkURL from '../../assets/icons/Bookmark.png'



export default class Post extends Component {

	render() {
		return (<div className = "postcontainer">
					<div className = "titleLine">		
						<h2> {this.props.title} </h2>
						<div className="dropdown">
						<button className="dropbtn">Dropdown</button>
						<div className="dropdown-content">
							<a href="#">dropDown 1</a>
							<a href="#">dropDown 2</a>
							<a href="#">dropDown 3</a>
						</div>
						</div>
					</div>	
					<div className = "authorInfo">
						<div> <img src={this.props.userAvatar} className="user-avatar" /> </div>
						<div> {this.props.userName} </div>
						<div> {this.props.time} </div>
					</div>

					<div> {this.props.content} </div>
					<div> {this.props.phtotos} </div>

					<div className="interaction">
						<img src={likeURL} className="like-btn" />
						<img src={commentURL} className="comment-btn" />
						<div> {this.props.likeCount} </div>
						<img src={bookmarkURL} className="reply-btn" />
						<div> {this.props.replyCount} </div>
					</div>
				</div>)
	}
}