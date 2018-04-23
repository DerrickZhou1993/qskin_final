import axios from 'axios'
import { umsApp } from '../config/config'
import { umsAPI } from '../config/api'
import { getSessionValues } from '../utils/loginHelpers'
import { createCookie, eraseCookie, 
		USER_ID_COOKIE, EMAIL_COOKIE, SESSION_ID_COOKIE } from '../utils/cookieHelpers'

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_ERROR = 'SIGNIN_ERROR'
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS'

//5 todos here.

export function signin(email, password) {
	return dispatch => {
		//todo1: use axios to post the sign-in request to ums.
		//The axios' post method takes 3 input: the url, the request body, and request options(where headers belongs to.)
		//Check the singout() function below for details of usage.
		
		//todo2: if the axios's post is successful, dispatch the signinSuccess() function; otherwise dispatch the signinError() function.
		//the signinSuccess takes 3 parameters: email, userId and sessionId. The userId and sessionId is returned from the call to ums.
		//the signinError takes 1 parameter: error. This should be the error message that ums returns, such as the combination of 
		//email and password does not match our record.
	}
}

function signinSuccess(email, userId, sessionId) {
	//todo3: create 3 cookies by calling the createCookie method 3 times.
	//cookie1: key: pj_uid, value: userId
	//cookie2: key: pj_e, value: email
	//cookie3: key: pj_ssid, value: sessionId
	return {
		type: SIGNIN_SUCCESS,
	}
}

function signinError(error) {
	return {
		type: SIGNIN_ERROR,
	}
}

export function signupHandler(firstName, middleName, lastName, email, password, consented) {
	return dispatch => {
		//todo4: use axios to post the sign-up request to ums.
		//The axios' post method takes 3 input: the url, the request body, and request options(where headers belongs to.)
		//Check the singout() function below for details of usage.
		
		//todo5: if the axios's post is successful, dispatch the signupSuccess() function; otherwise dispatch the signupError() function.
		//the signupSuccess takes no parameter.
		//the signupError takes 1 parameter: error. This should be the error message that ums returns, such as the email is already taken.
	}
}

function signupSuccess() {
	return {
		type: SIGNUP_SUCCESS,
	}
}

function signupError(error) {
	return {
		type: SIGNUP_ERROR,
	}
}

export function signout() {
	return dispatch => {
		const { userId, sessionId, email } = getSessionValues()
		if (userId !== null && sessionId !== null && email !== null) {
			axios.post(umsApp.baseUrl + umsAPI.signout,
				{
					email: email,
					session_id: sessionId,
					user_id: userId,
				}, {
					headers: {
						pj_uid: userId,
						pj_e: email,
						pj_ssid: sessionId,
					},
			}).then(function(res){
				if (res && res.data && res.data.result) {
					dispatch(signoutSuccess(USER_ID_COOKIE, EMAIL_COOKIE, SESSION_ID_COOKIE))
				}
			})
		}
	}
}

function signoutSuccess(userIdCookie, emailCookie, sessionCookie) {
	eraseCookie(emailCookie)
	eraseCookie(sessionCookie)
	eraseCookie(userIdCookie)
	return {
		type: SIGNOUT_SUCCESS,
	}
}