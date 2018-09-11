import { SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from '../actions/userActions'

export default (state = {
	signedIn: true,
	signinMsg: '',
}, action) => {
	switch (action.type) {
		case SIGNIN_SUCCESS: {
			return Object.assign({}, state, {
				signinMsg: 'You have signed in successfully.',
				signedIn: true,
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