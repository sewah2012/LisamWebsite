import React from 'react'
import Banner from '../../Components/Header/Banner/Banner'
import Footer from '../../Components/Header/Footer/Footer'
import Header from '../../Components/Header/Header'
import Alumini from './Alumini'
import Membership from './Membership'

const Members = () => {
	return (
		<div>
			<Header />
			<Banner title='Members / Alumini' image='assets/imgs/members.jpg' />
			<Membership />
			<Alumini />
			<Footer />
		</div>
	)
}

export default Members
