import axios from 'axios'
import { postsApp } from '../config/config'
import { postsAPI } from '../config/api'

export const CREATE_POST_SUCCESSFUL = 'CREATE_POST_SUCCESSFUL'
export const CREATE_POST_FAILED = 'CREATE_POST_FAILED'

export function create(title, content, userId) {
    return dispatch => {
        axios.post(postsApp.baseUrl + postsAPI.createPost,
			{
				title: title,
				content: content,
				userId,
			})
		.then(function(res){
			if (res && res.data && res.data.result) {
				dispatch(createSuccess())
			}
		}).catch(function(err) {
			dispatch(createFail(err))
		})
    }
}

function createSuccess() {
	return {
		type: CREATE_POST_SUCCESSFUL,
	}
}

function createFail(error) {
	return {
		type: CREATE_POST_FAILED,
	}
}