import './AboutAlumini.css';
import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Header/Footer/Footer';
import Banner from '../../Components/Header/Banner/Banner';
import Staff from '../../Components/Header/Staff/Staff';
import { leaders } from './Leaders';

const AboutAlumini = () => {
	return (
		<div className='about'>
			<Header />
			<Banner title='LISAM-Alumini Association' image='https://adsf.schoolspeak.com/Data/Communities/94110003/Postings/Alumni/alumni.png' />
			<div className='about__info'>


				<div className='about__mission'>
					<img src='/assets/imgs/precious.jpg' alt='mission' />
					<div className='about__mission-details'>
						<h2>LISAM Alumini Association</h2>
						<p>
							Alumni Services Mission Statement:
							The Alumini Association of LISAM was created in order to strengthen 
							connections and encourage involvement with the institution. 
							The following values will guide our work: 
							Quality, Service, Pride, Professionalism, Relationships, Traditions, 
							and Diversity.

							<br /><br />
							Alumni Association Mission Statement:
							The mission of the Illinois State University Alumni Association is to support the University through the knowledge, skills, financial resources, and loyalty of its alumni; to communicate and interpret the University's goals and achievements to others; and to promote a spirit of unity and loyalty among former students and friends.
						{/* <ul>
								<li>To help Liberian students during their studies in the Kingdom of Morocco,</li>
								<li>To integrate Liberian scholars on Moroccan soil, and promote the spirit of nationalism among them,</li>
								<li>To promote academic excellence among students, and other social programs that enable students to pursue
								their academic goals in a fertile environment.
						</li>

							</ul> */}

						</p>
					</div>
				</div>
			</div>
			<div id='staff'>
				<div className='about__info-leadership'>
					<h2>Leadership of the Alumini</h2>
					<p>
						<i>
							The need for Leadership and organizations to build Society, a tradition
							bequeathed to us by great men of old, has lived the test of time. Below are the great veterans who shoulder
							the ultimate responsibility of running the LISAM Alumini Association.
						</i>
					</p>

					<div className='staffRow'>
						{leaders.map((leader, index) => (
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
			</div>
			<Footer />
		</div>
	)
}

export default AboutAlumini;
