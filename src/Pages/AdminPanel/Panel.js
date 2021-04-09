import './Panel.css';
import { Button, Grid } from '@material-ui/core'
import React, { useState } from 'react';
import AdminHeader from './AdminHeader';
import NewsPanel from './NewsActivities/NewsPanel';
import AluminiPanel from './AluminiActivities/AluminiPanel';


const Panel = () => {
	const [newsOpen, setNewsOpen] = useState(false);
	const [aluminiOpen, setAluminiOpen] = useState(false);

	const setNewsView=()=>{
		setAluminiOpen(false);
		setNewsOpen(true);
	}

	const setAluminiView=()=>{
		setAluminiOpen(true);
		setNewsOpen(false);
	}

	return (
		<div className='panel'>
			<AdminHeader />
			<Grid container spacing={16}>
				<Grid item sm={4} xs={12}>
					<div className='adminProfile'>
						<h1>Profile </h1>
					</div>

					<div className='panel__menu'>
						<div className='panel__menu-item'>
							<Button onClick={setNewsView} variant='contained' fullWidth color='primary'>NEWS</Button>
						</div>
						<div className='panel__menu-item'>
							<Button onClick={setAluminiView} variant='contained' fullWidth color='primary'>Alumini</Button>
						</div>

						<div className='panel__menu-item'>
							<Button variant='contained' fullWidth color='primary'>Leadership</Button>
						</div>

						<div className='panel__menu-item'>
							<Button variant='contained' fullWidth color='primary'>Users</Button>
						</div>


					</div>
				</Grid>
				<Grid item sm={8} xs={12}>
					<div className='dashboardBody'>
						{ newsOpen && <NewsPanel />}
						{ aluminiOpen && <AluminiPanel />}
						
					</div>
				</Grid>
			</Grid>

		</div>
	)
}

export default Panel
