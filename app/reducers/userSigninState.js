import { SIGNOUT_SUCCESS } from '../actions/userActions'

export default (state = {
	signedIn: false,
	signinMsg: '',
}, action) => {
	switch (action.type) {
		case SIGNOUT_SUCCESS: {
			window.console.log("signing out in userSigninState.SIGNOUT_SUCCESS case.")
			return Object.assign({}, state, {
				signinMsg: '',
				signedIn: false,
			})
		}
		default:
			return state
	}
}