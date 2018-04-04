import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class AppContainer extends Component {

	render() {
		return (
			<div>
				<ReactCSSTransitionGroup
					transitionName="overall"
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={1000}
				>
					{React.cloneElement(this.props.children, {
						key: pathname,
					})}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}
