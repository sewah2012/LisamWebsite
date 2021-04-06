import './Universities.css';
import React from 'react';
import Banner from '../../Components/Header/Banner/Banner';
import Footer from '../../Components/Header/Footer/Footer';
import Header from '../../Components/Header/Header';
import { listOfUniversities } from './listOfUniversities';

const Universitites = () => {
	return (
		<div>
			<Header />
			<Banner title='Public Universities in Morocco' image='/assets/imgs/study.jpg' />
			<h1>List of Universities in Morocco</h1>
			<div className='universities'> 
				<table>
					<tr>
						<th>No.</th>
						<th>University</th>
						<th>City</th>
						<th>Website</th>
					</tr>
					{
						listOfUniversities.map((u,index)=>(
							<tr key={index}>
								<td>{index+1}</td>
								<td>{u.name}</td>
								<td>{u.location}</td>
								<td><a href={u.website} target='_blank' rel='noreferrer'>{u.website}</a></td>
								

							</tr>
						))
					}
				</table>
			</div>
			<Footer />
		</div>
	)
}

export default Universitites
