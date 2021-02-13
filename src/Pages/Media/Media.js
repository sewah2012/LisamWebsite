import './Media.css';
import React from 'react'
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Header/Banner/Banner';
import Footer from '../../Components/Header/Footer/Footer';
import MediaBody from './MediaBody';

const Media = () => {
	return (
		<div>
			<Header />
			<Banner title='Announcements / Documents' image='/assets/imgs/mediabg.jpg' />
			<MediaBody />
			<Footer/>
		</div>
	)
}

export default Media
