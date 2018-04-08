import { eraseCookie, userIdCookie, emailCookie, sessionCookie } from '../utils/cookieHelpers'

export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS'

export function signout() {
	window.console.log("signing out in signout")
	return dispatch => {
		dispatch(SignoutSuccess(emailCookie, sessionCookie, userIdCookie))
	}
}

function SignoutSuccess(emailCookie, sessionCookie, userIdCookie) {
	eraseCookie(emailCookie)
	eraseCookie(sessionCookie)
	eraseCookie(userIdCookie)
	window.console.log("signing out in SignoutSuccess")
	return {
		type: SIGNOUT_SUCCESS,
	}
}