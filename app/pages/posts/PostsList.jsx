import React, { Component } from 'react'
import Post from './Post'

import avartar from '../../assets/catAvartar.png'
export default class PostsList extends Component {


	
	render() {
		const posts = [
			{ id: 1, title: 'Title1', content: 'Content1', userName: 'User1', userAvatar: avartar, time: 'Time1', photos:[], likeCount: 10, replyCount:10},
			{ id: 2, title: 'Title2', content: 'Content2', userName: 'User2', userAvatar: avartar, time: 'Time2', photos:[], likeCount: 10, replyCount:10},
			{ id: 3, title: 'Title3', content: 'Content3', userName: 'User3', userAvatar: avartar, time: 'Time3', photos:[], likeCount: 10, replyCount:10}]
		
		return (<div className="container">

		{	posts.map( (post, index) => {
			return <Post 
				title = {post.title}
				content = {post.content}
				userAvatar = {post.userAvatar}
				userName = {post.userName}
				time = {post.time}
				photos = {post.photos}
				likeCount = {post.likeCount}
				replyCount = {post.replyCount} />

		})}

		</div>)
	}
}