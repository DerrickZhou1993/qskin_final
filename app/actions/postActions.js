import axios from 'axios'
import { postsApp } from '../config/config'
import { postsAPI } from '../config/api'

export const CREATE_POST_SUCCESSFUL = 'CREATE_POST_SUCCESSFUL'
export const CREATE_POST_FAILED = 'CREATE_POST_FAILED'
export const UPLOAD_FILES_SUCCESSFUL = 'UPLOAD_FILES_SUCCESSFUL'
export const UPLOAD_FILES_FAILED = 'UPLOAD_FILES_FAILED'

export function createPost(title, content, userId, filepath) {
    return dispatch => {
        axios.post(postsApp.baseUrl + postsAPI.createPost,
			{
				title: title,
				content: content,
				userId,
				filepath: filepath,
			})
		.then(function(res){
			if (res && res.data && res.data.result) {
				dispatch(createPostSuccess(title, content, userId, filepath))
			}
		}).catch(function(err) {
			dispatch(createPostFail(err))
		})
    }
}

function createPostSuccess(title, content, userId, filepath) {
	return {
		type: CREATE_POST_SUCCESSFUL,
		title: title,
		content: content,
		userId: userId,
		filepath: filepath,
	}
}

function createPostFail(error) {
	return {
		type: CREATE_POST_FAILED,
	}
}

export function uploadFiles(files) {
    return dispatch => {
        axios.post(postsApp.baseUrl + postsAPI.uploadPhotos, files)
		.then(function(res){
			if (res && res.data && res.data.result) {
				dispatch(uploadSuccess(res.data.filepath))
			}
		}).catch(function(err) {
			dispatch(uploadFail(err))
		})
    }
}

function uploadSuccess(filepath) {
	return {
		type: UPLOAD_FILES_SUCCESSFUL,
		filepath: filepath,
	}
}

function uploadFail(error) {
	return {
		type: UPLOAD_FILES_FAILED,
	}
}