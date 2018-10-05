import { SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from '../actions/userActions'

export default (state = {
	signedIn: false,
	signinMsg: '',
	userInfo: null,
}, action) => {
	switch (action.type) {
		case SIGNIN_SUCCESS: {
			return Object.assign({}, state, {
				signinMsg: 'You have signed in successfully.',
				signedIn: true,
				userInfo: {
					email: action.payload.email,
					userId: action.payload.userId,
					sessionId: action.payload.sessionId,
				},
			})
		}
		case SIGNOUT_SUCCESS: {
			return Object.assign({}, state, {
				signinMsg: '',
				signedIn: false,
			})
		}
		default:
			return state
	}
}