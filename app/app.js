//require('./stylesheets/app.scss')
require('./stylesheets/vendor/bootstrap/css/bootstrap.min.v.3.3.5.css')

//react stuff
import React from 'react'
import { render } from 'react-dom'
import { Route, Router, useRouterHistory, hashHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { requireAuth } from './utils/loginHelpers'

//redux stuff
import { Provider } from 'react-redux'
import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { createStore, renderDevTools } from './utils/devTools'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { env } from './config/config'
import { backendUrls } from './config/backendUrls'

let appHistory = null;

if (env === 'dev') {
	appHistory = hashHistory
} else {
	appHistory = useRouterHistory(createBrowserHistory)({basename: '/'})
}

let store = createStore(CitySearchApp,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
)

let routes = (
	<MuiThemeProvider>
		<div className="app">
			<Provider store={store}>
				<Router history={appHistory}>
					<Route name="main" component={AppContainer}>
						//<Route name="aboutus" path="/aboutus" component={AboutUsContainer}/>
						//<Route name="contactus" path="/contactus" component={ContactusContainer}/>
						//<Route name="events" path="/events" component=EventsContainer}/>
						//<Route name="eventId" path="/events/:eventId" component={EventIdContainer}/>
						//<Route name="courses" path="/courses" component={CoursesContainer}/>
						//<Route name="courseId" path="/courses/:courseId" component={CourseIdContainer}/>
						//users
						//<Route name="userProfile" path="/users/mee" component={UserProfileContainer} onEnter={requireAuth} />
						//<Route name="userSignup" path="/users/new" component={UserSignUpContainer} />
						//<Route name="userSignin" path="/users/signin" component={UserSignInContainer} />
						//<Route name="userSignout" path="/users/signout" component={UserSignOutContainer} onEnter={requireAuth}/>
						//<Route name="forgetpassword" path="/users/forgetpassword" component={ForgetPasswordContainer}/>
						//<Route name="userEvents" path="/users/:userId/events" component={UserEventContainer}/>
						//<Route name="userCourses" path="/users/:userId/courses" component={UserCourseContainer}/>
						<Route name="home" path="/" component={HomePageContainer}/>
					</Route>
				</Router>
			</Provider>

			{renderDevTools(store)}
		</div>
	</MuiThemeProvider>
)

render(routes, document.body)
