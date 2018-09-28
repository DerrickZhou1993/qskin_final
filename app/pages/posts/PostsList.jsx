import React, { Component } from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import { listposts } from '../../actions/postActions'
import avartar from '../../assets/catAvartar.png'
var deepEqual = function (x, y) {
	if (x === y) {
	  return true;
	}
	else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
	  if (Object.keys(x).length !== Object.keys(y).length)
		return false;
  
	  for (var prop in x) {
		if (Object.prototype.hasOwnProperty.call(y, prop))
		{  
		  if (! deepEqual(x[prop], y[prop]))
			return false;
		}
		else
		  return false;
	  }
  
	  return true;
	}
	
	  return false;
  }
 class PostsList extends Component {
	constructor(props) {
		super(props);
		this.state = { posts: [] };
	}
	
	componentWillMount() {
		this.props.dispatch(listposts())
		this.setState({
			posts:this.props.listPostsState.posts,
		})
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log("2"+this.props.listPostsState.message + "2")
		console.log( deepEqual(nextState.posts,this.props.listPostsState.posts),
	this.state.posts)
		return !deepEqual(nextState.posts,this.state.posts)
		
	}
	  
	render() {
		return (<div className="container">
			{this.state.posts.map((post, index) => {
				return <Post
					title={post.title}
					content={post.content}
					userAvatar={''}
					userName={post.user.username}
					time={post.created_at}
					photos={[]}
					likeCount={0}
					replyCount= {0}
					 />
			})}
		</div>)
	}
}

function select(state) {
	return {
		listPostsState: state.listPostsState,
	}
}

export default connect(select)(PostsList)
	// this.setState(
		// 	{
		// 		posts: [
		// 			{ id: 1, title: 'Title1', content: 'Content1', userName: 'User1', userAvatar: avartar, time: 'Time1', photos: [], likeCount: 10, replyCount: 10 },
		// 			{ id: 2, title: 'Title2', content: 'Content2', userName: 'User2', userAvatar: avartar, time: 'Time2', photos: [], likeCount: 10, replyCount: 10 },
		// 			{ id: 3, title: 'Title3', content: 'Content3', userName: 'User3', userAvatar: avartar, time: 'Time3', photos: [], likeCount: 10, replyCount: 10 },
		// 		],
		// 	}
		// );