import './Home.css';
import React from 'react'
import Header from '../../Components/Header/Header';
import HomeSlider from '../../Components/Header/Slider/HomeSlider';
import BriefAbout from '../../Components/Header/BriefAbout/BriefAbout';
import InfoSection from '../../Components/Header/InfoSection/InfoSection';
import Publications from '../../Components/Header/Publications/Publications';
import Partners from '../../Components/Header/Partners/Partners';
import Footer from '../../Components/Header/Footer/Footer';

const Home = () => {
	return (
		<div className="Home">
		<Header />
		<HomeSlider />
		{/* covid 19 information center */}
		<BriefAbout />
		<InfoSection />
		<Publications />
		<Partners />
		{/* newsletter signup */}
		
		<Footer />
	  </div>
	)
}

export default Home
