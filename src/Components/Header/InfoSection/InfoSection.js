import './InfoSection.css';
import React from 'react'
import InfoBox from './InfoBox';

const InfoSection = () => {
	return (
		<div className = 'infoSection__head'>
			<h2>What We stand for</h2>
			<div className = 'infoSection'>
			<InfoBox bgImage = 'inovation.jpg' text='Innovation'/>
			<InfoBox bgImage = 'study.jpg' text='Hard work'/>
			<InfoBox bgImage = 'acadSucess.jpg' text='Academic Success'/>
		</div>
		</div>
	)
}

export default InfoSection
