import React from 'react'
import { render } from 'react-dom'
import { Route, Router } from 'react-router'
import AppContainer from './pages/AppContainer'
import HomePageContainer from './pages/homepage/HomePageContainer'

let routes = (
		<div className="app">
				<Router>
					<Route name="main" component={AppContainer}>
						<Route name="home" path="/" component={HomePageContainer}/>
					</Route>
				</Router>
		</div>
)

render(routes, document.getElementById('root'))
