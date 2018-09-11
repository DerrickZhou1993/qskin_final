import React, { Component } from 'react'
import { Redirect } from 'react-router'

export default class UserProfileForm extends Component {
  constructor(props) {
    super(props)
    const user = this.props.userSigninState.user
    this.state = {
      user: user,
      errorMessage: '',
      validFirstName: false,
      validLastName: false,
      validUsername: false,
    }
  }

  render() {
    const user = this.state.user || {}

    if (!this.props.userSigninState.signedIn) {
      return (<Redirect to='users/signin' />)
    }

    return (<div>
      <form className="user-form text-center" id="userProfileForm" name="userProfileForm">
        <div>{this.state.errorMessage}</div>
        <div>
          <input className="form-control form-field-first"
            aria-label="firstname"
            placeholder="Provide a first name"
            type="text"
            value={user.firstName}
            onChange={this.handleChangeFirstName.bind(this)}
            />
        </div>
        <div>
          <input className="form-control form-field-first"
            aria-label="lastname"
            placeholder="Provide a last name"
            type="text"
            value={user.lastName}
            onChange={this.handleChangeLastName.bind(this)}
            />
        </div>
        <div>
          <input className="form-control form-field-first"
            aria-label="username"
            placeholder="Create a new username"
            type="text"
            value={user.username}
            onChange={this.handleChangeUsername.bind(this)}
            />
        </div>
        <div>
          <button className="btn btn-primary btn-block" type="submit"
            disabled={!(this.state.validFirstName && this.state.validLastName && this.state.validUsername)} 
            onClick={this.handleClickSaveProfile.bind(this)} 
            >
            <span>Save Profile</span>
          </button>
        </div>
      </form>
    </div>)
  }
}