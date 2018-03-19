//require('./stylesheets/app.scss')
//require('./stylesheets/vendor/bootstrap/css/bootstrap.min.v.3.3.5.css')

//react stuff
import React from 'react'
import { render } from 'react-dom'
import { Route, Router, useRouterHistory, hashHistory } from 'react-router'
import { requireAuth } from './utils/loginHelpers'

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
