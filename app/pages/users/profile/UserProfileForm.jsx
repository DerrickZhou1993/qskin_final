import React, { Component } from 'react'
import { Link } from 'react-router'

export default class UserProfileForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessage: '',
      validFirstName: true,
      validLastName: true,
      validUsername: true,
    }
  }

  render() {
    if (this.props.userSigninState.signedIn) {
      return (<div id="redirectSignin" className="user-form text-center">
        Don't sign in yet? <Link to="/users/signin">Click to sign in.</Link>
      </div>)
    }

    return (<div>
      <form className="user-form text-center" id="userProfileForm" name="userProfileForm">
        <div>{this.state.errorMessage}</div>
        <div>
          <input className="form-control form-field-first"
            aria-label="firstname"
            placeholder="Provide a first name"
            type="text"
            value="firstName"
            />
        </div>
        <div>
          <input className="form-control form-field-first"
            aria-label="lastname"
            placeholder="Provide a last name"
            type="text"
            value="lastName"
            />
        </div>
        <div>
          <input className="form-control form-field-first"
            aria-label="username"
            placeholder="Create a new username"
            type="text"
            value="userName"
            />
        </div>
        <div>
          <button className="btn btn-primary btn-block" type="submit"
            disabled={!(this.state.validFirstName && this.state.validLastName && this.state.validUsername)} 
            >
            <span>Save Profile</span>
          </button>
        </div>
      </form>
    </div>)
  }
}