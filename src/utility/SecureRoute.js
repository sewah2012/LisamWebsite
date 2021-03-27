import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const AuthRoute = ({ component: Component, authenticated, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props=>authenticated!==true ? <Redirect to='/login' /> : <Component {...props} / >}
		/>
	)
}

export default AuthRoute;