import './BriefAbout.css';
import React from 'react'
import { Link } from 'react-router-dom';

const BriefAbout = () => {
	return (
		<div className='BriefAbout'>
			<img src='/assets/imgs/brAbt.jpg' alt='About' />
			<div className='BriefAbout__content'>
				<h2>Who  we are </h2>
				<p>
				LISAM is the acronym for the Liberian Students Association in Morocco. 
				It is an association charged with the responsibility of steering the affairs of 
				Liberian scholars in Morocco. <br />
				
				The Association was founded in the year 1987 by the first group of Liberian Scholars to pursue higher Education 
				in The Kingdom of Morocco. Since it's insertion the organization has ensured the success of many young Liberian scholars 
				who sought higher Education in Morocco...
				<i><Link to='/about-us'>Learn More</Link></i>
 				</p>
			</div>
		</div>
	)
}

export default BriefAbout
