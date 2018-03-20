import { readCookie, eraseCookie } from './cookieHelpers'

export function authUser(loginCb, logoutCb) {
	const { userId, sessionId, email } = getSessionValues()

	if (!(userId && sessionId && email)) {
		logoutCb()
	} else {
		loginCb()
	}
}

export function signoutUser() {
	for (const c of ['fe_el', 'fe_el_id', 'fe_sk_el']) {
		eraseCookie(c)
	}
}

export function getSessionValues() {
	let email = readCookie('fe_el')
	return {
		userId: readCookie('fe_el_id') || '',
		sessionId: readCookie('fe_sk_el') || '',
		email: email === null ? '' : email.replace('%40', '@'),
	}
}

export function requireAuth(nextState, replace) {
	const { userId, sessionId, email } = getSessionValues()
	if (!(userId && sessionId && email)) {
		replace({pathname: '/users/signin'});
	}
}
