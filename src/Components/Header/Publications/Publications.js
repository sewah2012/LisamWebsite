import './Publications.css';
import React, { useState } from 'react'
import { AppBar, Tab, Tabs } from '@material-ui/core';

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
						<Tab label='Upcomming Events' />
						<Tab label='Announcement' />
						<Tab label='Press Release' />
					</Tabs>
				</AppBar>
				<TabPanel value={value} index={0}><h1>Upcomming Events</h1></TabPanel>
				<TabPanel value={value} index={1}><h1>Announcement</h1></TabPanel>
				<TabPanel value={value} index={2}><h1>Press Statements </h1></TabPanel>
			</div>
		</div>
	)
}

export default Publications;


