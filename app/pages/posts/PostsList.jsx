import React, { Component } from 'react'
import Post from './Post'
import { deepEqual } from '../../utils/deepEqual.js'
export default class PostsList extends Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !deepEqual(nextProps.listPostsState.posts, this.props.listPostsState.posts)
	}

	render() {
		return (
			<div className="container">
				{this.props.listPostsState.posts.map((post, index) => {
					return <Post
						key={index}
						title={post.title}
						content={post.content}
						userAvatar={''}
						userName={post.user.username}
						time={post.created_at}
						photos={[]}
						likeCount={0}
						replyCount={0}
					/>
				})}
			</div>)
	}
}
