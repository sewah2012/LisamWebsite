import './NewsDetails.css';
import React from 'react'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Header/Footer/Footer';
import Partners from '../../Components/Header/Partners/Partners';
import Publications from '../../Components/Header/Publications/Publications';
import Banner from '../../Components/Header/Banner/Banner';
import Content from './Content';

const NewsDetails = () => {

	
	return (
		<div>
			<Header />
			<Banner title='Ness and Press Release' image='/assets/imgs/newsbg.jpg' />
			<Content />
			<Publications />
			<Partners />
			<Footer />
		</div>
	)
}

export default NewsDetails
