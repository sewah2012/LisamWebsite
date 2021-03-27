import './Publications.css';
import React, { useEffect, useState } from 'react'
import { AppBar, Tab, Tabs } from '@material-ui/core';
import News from '../News/News';
import Documents from '../Documents/Documents';
import { useDispatch } from 'react-redux';
import { getNews } from '../../../Redux/actions/newsActions';

function TabPanel({ children, value, index }) {
	return (
		<div>{value === index && children}</div>
	)
}

const Publications = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState(0);

	const handleChange = (e, val) => {
		setValue(val);
	}
	useEffect(() => {
		dispatch(getNews())
		return () => {
			
		}
	}, [])
	return (
		<div className='publications'>
			{/* <h1>Check out our upcomming Events, Announcements and Press Releases</h1> */}
			<div >
				<AppBar position='static'>

					<Tabs value={value} onChange={handleChange}>
						<Tab label='News and Press Releases' />
						<Tab label='Important Documents' />
					</Tabs>
				</AppBar>
				<TabPanel value={value} index={0}><News /> </TabPanel>
				<TabPanel value={value} index={1}><Documents /> </TabPanel>
			</div>
		</div>
	)
}

export default Publications;


