import { Typography } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Header/Footer/Footer';
import Header from '../Components/Header/Header';

const PageNotFound = () => {
	return (
		<div className = 'PageNotFound'>
			<Header />
			<Typography variant='h5' color='secondary'>
				Sorry This page is not available
			</Typography>
	
			<Link to='/'>Click Here to return Home</Link>
			<Footer />
		</div>
	)
}

export default PageNotFound;
