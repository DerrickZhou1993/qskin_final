import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'

import BaseComponent from './BaseComponent'

export default class AppContainer extends BaseComponent {
	componentWillMount() {
		if (this.props.location.query.refId) {
			if (this.props.location.query.camId) {
				this.props.dispatch(recordRefData(this.props.location.query.ref,
													this.props.location.query.camId));
			} else {
				this.props.dispatch(recordRefData(this.props.location.query.ref, ''));
			}
		}
	}

	render() {
		const pathname = this.props.location.pathname
		const query = this.props.location.query.callback
		return (
			<div className={"app-container " + this.props.routes[1].name}>
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