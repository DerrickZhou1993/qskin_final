import React, { Component } from 'react'
import '../../stylesheets/banner.scss'
const bannerURL='../../../assets/banner.png'
export default class Banner extends Component {

	render() {
	  return (<div className="container">
		  <img src={bannerURL} alt="Qskin Forum"/>
		  <div className="words" >
		    <p>You have not currently signed in.</p>
		    <p>Please <a href="/users/signin">sign in from here</a>.</p>
		  </div>
		</div>)
	}
}