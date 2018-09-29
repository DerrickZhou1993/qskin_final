import React, { Component } from 'react'
import '../../stylesheets/homeButton.scss'

export default class HomeButton extends Component {
	render() {
		return (<div className="homeLinkContainer">	  
			<p id="homeLink"><a href="/">HOME</a></p>
		</div>)
	}
}