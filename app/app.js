//react stuff
import React from 'react'
import { render } from 'react-dom'
import { Route, Router } from 'react-router'
import HomePageContainer from './containers/HomePageContainer'

let routes = (
		<div className="app">
				<Router>
					<Route name="main">
						<Route name="home" path="/" component={HomePageContainer}/>
					</Route>
				</Router>
		</div>
)

render(routes, document.getElementById('root'))
