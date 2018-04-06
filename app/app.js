import React from 'react'
import { render } from 'react-dom'
import { Route, Router } from 'react-router'
import HomePageContainer from './pages/homepage/HomePageContainer'
import SignupContainer from './pages/users/signup/SignupContainer'
import SigninContainer from './pages/users/signin/SigninContainer'
import SignoutContainer from './pages/users/signout/SignoutContainer'

let routes = (
		<div className="app">
				<Router>
					<Route name="main">
						<Route name="home" path="/" component={HomePageContainer}/>
						<Route name="home" path="users/signup" component={SignupContainer}/>
						<Route name="home" path="users/signin" component={SigninContainer}/>
						<Route name="home" path="users/signout" component={SignoutContainer}/>
					</Route>
				</Router>
		</div>
)

render(routes, document.getElementById('root'))
