import React, { Component } from 'react'

export default class Banner extends Component {

	render() {
		return (<div className="container">
			<img id="banner" src="banner.png" alt="Qskin Forum" style="width:100%"/> 
            <div className="container"></div>
            <div className="words">
                <p>You have not currently signed in.</p>
                <p>Please<a href="/users/signin">sign in from here</a>.</p>
            </div>

		</div>)
	}
}