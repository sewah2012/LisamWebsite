import './About.css';
import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Header/Footer/Footer';
import Banner from '../../Components/Header/Banner/Banner';
import Staff from '../../Components/Header/Staff/Staff';
import {leaders} from './Leaders';

const About = () => {
	return (
		<div className='about'>
			<Header />
			<Banner title='About LISAM' image='/assets/imgs/study.jpg' />
			<div className='about__info'>
				<div className='about__info-history'>
					<h2>The Lisam story</h2>
					<p>
						LISAM is the acronym for the Liberian Students Association in Morocco.
						It is an association charged with the responsibility of steering the affairs of
						Liberian scholars in Morocco.
						The Association was founded in the year 1987 by the first group of Liberian Scholars to pursue higher Education
						in The Kingdom of Morocco. Since it's insertion the organization has ensured the success of many young Liberian scholars
						who sought higher Education in Morocco.
						The Liberian Students Association in Morocco is strictly a student based organization and as such is not involved in any
						political or related activities both in Morocco and Liberia.
					</p>
				</div>


				<div className='about__mission'>
					<img src='/assets/imgs/precious.jpg' alt='mission' />
					<div className='about__mission-details'>
						<h2>Our Mission and Objective</h2>
						<p>
						LISAM is strictly a Liberian student-based organization in the Kingdom of Morocco. 
						Its missions are, but not limited to,
						<ul>
						<li>To help Liberian students during their studies in the Kingdom of Morocco,</li>
						<li>To integrate Liberian scholars on Moroccan soil, and promote the spirit of nationalism among them,</li>
						<li>To promote academic excellence among students, and other social programs that enable students to pursue 
						their academic goals in a fertile environment.</li>

						</ul> 
						
						</p>
					</div>
				</div>
			</div>
			<div className='about__info-leadership'>
				<h2>Meet the LEadership</h2>
				<p>
					<i>
						The need for Leadership and organizations to build Society, a tradition
						bequeathed to us by great men of old, has lived the test of time. Below are the great scholars who shoulders
						the ultimate responsibility of running the organization.
						</i>
				</p>
				<div className='staffRow'>
					{leaders.map((leader,index)=>(
						<Staff
						name={leader.name}
						position={leader.position}
						imageUrl={leader.imageUrl}
						phone={leader.phone}
						email={leader.email}
						facebook={leader?.facebook}
						linkind={leader?.linkind}
					/>
					))}

					
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default About;
