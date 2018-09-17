import { combineReducers } from 'redux'
import userSigninState from './userSigninState'
import userSignupState from './userSignupState'
import postState from './postState'

export default combineReducers({
	userSigninState,
	userSignupState,
	postState,
})