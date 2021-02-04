import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header/Header';

const PageNotFound = () => {
	return (
		<div className = 'PageNotFound'>
			<Header />
			<h1>Sorry This page is not available</h1>
			<Link to='/'>Click Here to return Home</Link>
		</div>
	)
}

export default PageNotFound;
