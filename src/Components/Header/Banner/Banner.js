import './Banner.css';
import React from 'react'

const Banner = ({title, image}) => {
	return (
		<div className = 'banner' style = {{backgroundImage:`url(${image})`}}>
			<h1 className = 'banner__title'> {title} </h1>
		</div>
	)
}

export default Banner
