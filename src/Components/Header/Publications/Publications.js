import './Publications.css';
import React, { useState } from 'react'
import { AppBar, Tab, Tabs } from '@material-ui/core';
import News from '../News/News';
import Documents from '../Documents/Documents';

function TabPanel({ children, value, index }) {
	return (
		<div>{value === index && children}</div>
	)
}

const Publications = () => {
	const [value, setValue] = useState(0);

	const handleChange = (e, val) => {
		setValue(val);
	}
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


