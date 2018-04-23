import { SIGNUP_SUCCESS, SIGNUP_ERROR } from '../actions/userActions'

//5 todos here.

export default (state = {
	//todo1: add the default values of the userSignupState.
	//It should has 2 fields: signedUp(boolean) and signupMsg(string).
	//signedUp default value should be false, and signupMsg should be ''.
}, action) => {
	switch (action.type) {
		case SIGNUP_SUCCESS: {
			//todo2: assign the new values to the state.
			/*
			return Object.assign({}, state, {
				// Fill in here: what is the new state
				// if sign in is successful?
			})
			todo3: remove the following return
			*/
			return state
		}
		case SIGNUP_ERROR: {
			//todo4: assign the new values to the state.
			/*
			return Object.assign({}, state, {
				// Fill in here: what is the new state
				// if sign in is successful?
			})
			todo5: remove the following return
			*/
			return state
		}
		default:
			return state
	}
}