import React, { Component } from 'react'
require ('../../stylesheets/post.scss')
import "../../stylesheets/imageSlide.scss"
import likeURL from '../../assets/icons/Like.png'
import commentURL from '../../assets/icons/Comment.png'
import bookmarkURL from '../../assets/icons/Bookmark.png'
import Slider from "react-slick"

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

		const sliderSettings = {
			dots: true,
			arrows: true,
			dotsClass: "slick-dots slick-thumb",
			infinite: true,
			speed: 500,
			slidesToShow: 2,
			slidesToScroll: 1,
		}

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
					<div> {this.props.content} </div>

					{
						this.props.photos.length > 0 ? 
							<div className="sliderContainer">
								<Slider {...sliderSettings}>
									{this.props.photos.map(image => (
										<div key={image.toString()}>
											<img src={image} />
										</div>
									))}
								</Slider>
							</div>
						: null
					}
					
					<div className="interaction">
						<img src={likeURL} className="like-btn" />
						<div className="info"> {this.props.likeCount} </div>
						<img src={commentURL} className="comment-btn" />
						<div className="info"> {this.props.replyCount} </div>
					</div>
				</div>)
	}
}