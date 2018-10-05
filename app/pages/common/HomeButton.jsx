import React, { Component } from 'react'
import '../../stylesheets/homeButton.scss'
import { Link } from 'react-router'

export default class HomeButton extends Component {
	render() {
		return (<div className="homeLinkContainer">	  
			<p id="homeLink">
				<Link to='/'>HOME</Link>
			</p>
		</div>)
	}
}