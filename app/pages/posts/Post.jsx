import React, { Component } from 'react';
import '../../stylesheets/post.scss';

const likeURL = '../../assets/icons/Like.png';
const commentURL = '../../assets/icons/Comment.png';
const bookmarkURL = '../../assets/icons/Bookmark.png';



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
						<div> <img src={this.props.userAvatar} /> </div>
						<div> {this.props.userName} </div>
						<div> {this.props.time} </div>
					</div>

					<div> {this.props.content} </div>
					<div> {this.props.phtotos} </div>

					<div className="interaction">
						<img src={likeURL} />
						<img src={commentURL} />
						<div> {this.props.likeCount} </div>
						<img src={bookmarkURL} />
						<div> {this.props.replyCount} </div>
					</div>
				</div>)
	}
}