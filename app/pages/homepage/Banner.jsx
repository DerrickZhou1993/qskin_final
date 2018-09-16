import React, { Component } from 'react'
import '../../stylesheets/banner.scss'
import banner from '../../assets/banner.png'

export default class Banner extends Component {
	render() {
	  return (<div className="container">
		  <img src={banner} alt="Qskin Forum"/>	
			<div className="text">	  
		    <p>You have not currently signed in. Please <a href="/users/signin">sign in from here</a>.</p>
			</div>
		</div>)
	}
}