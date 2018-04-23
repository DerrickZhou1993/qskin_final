import { SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from '../actions/userActions'

//2 todos here.

export default (state = {
	signedIn: false,
	signinMsg: '',
}, action) => {
	switch (action.type) {
		case SIGNIN_SUCCESS: {
			//todo1: assign the new values to the state.
			/*
			return Object.assign({}, state, {
				// Fill in here: what is the new state
				// if sign in is successful?
			})
			todo2: remove the following return
			*/
			return state
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