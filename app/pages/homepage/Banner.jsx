import React, { Component } from 'react'
import banner from '../../assets/banner.png'

export default class Banner extends Component {
	render() {
	  return (<div className="container">
		  <img src={banner} alt="Qskin Forum"/>
		</div>)
	}
}