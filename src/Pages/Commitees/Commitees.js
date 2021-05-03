import './committees.css'
import React, { useEffect } from 'react'
import Banner from '../../Components/Header/Banner/Banner';
import Footer from '../../Components/Header/Footer/Footer';

import { cData } from './data';
import Chair from './Chair';
import Header from '../../Components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getChairman } from '../../Redux/actions/newsActions';

const Commitees = () => {
	const dispatch = useDispatch();
	const { loading, chairman } = useSelector(state => state.data)

	useEffect(() => {
		dispatch(getChairman());
		return () => {

		}
	}, [dispatch])
	return (
		<div >
			<Header />
			<Banner title='LISAM - Committees and Chair' image='/assets/imgs/study.jpg' />

			<div className='committee'>
				<h1> Meet our distinguished committees and hardworking chairpersons </h1>
				{loading ? <h1>Loading</h1> : 
					(
						<div className='committee__leaders'>
					{
						chairman.map((chair, index) => (
							<Chair
								key={index}
								cChairPerson={chair.cChairPerson}
								committee={chair.committee}
								imageUrl={chair.imageUrl}
								phone={chair.phone}
								email={chair.email}
								facebook={chair?.facebook}
								linkind={chair?.linkind}
							/>
						))}
				</div>
					)
				}
			</div>

			<Footer />
		</div>
	)
}

export default Commitees
