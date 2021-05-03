import './Panel.css';
import { Button, Grid } from '@material-ui/core'
import React, { useState } from 'react';
import AdminHeader from './AdminHeader';
import NewsPanel from './NewsActivities/NewsPanel';
import AluminiPanel from './AluminiActivities/AluminiPanel';
import UsersPanel from './UserActivities/UsersPanel';
import Menu from './LeadershipActivities/Menu';


const Panel = () => {
	const [newsOpen, setNewsOpen] = useState(true);
	const [aluminiOpen, setAluminiOpen] = useState(false);
	const [userOpen, setUserOpen] = useState(false);
	const [leadersOpen, setLeadersOpen] = useState(false)

	const setUserView=()=>{
		setAluminiOpen(false);
		setNewsOpen(false);
		setUserOpen(true)
		setLeadersOpen(false)
	}
	const setNewsView=()=>{
		setAluminiOpen(false);
		setUserOpen(false)
		setLeadersOpen(false)
		setNewsOpen(true);
	}

	const setAluminiView=()=>{
		setAluminiOpen(true);
		setNewsOpen(false);
		setUserOpen(false);
		setLeadersOpen(false);
	}

	const setLeadersView = ()=>{
		setAluminiOpen(false);
		setNewsOpen(false);
		setUserOpen(false)
		setLeadersOpen(true)
	}

	return (
		<div className='panel'>
			<AdminHeader />
			<Grid container spacing={16}>
				<Grid item sm={4} xs={12}>
					<div className='adminProfile'>
						<h1>SITE MANAGEMENT CONSOLE </h1><br />
						<h5>Click on the Menu to perform an operation</h5>
					</div>

					<div className='panel__menu'>
						<div className='panel__menu-item'>
							<Button onClick={setNewsView} variant='contained' fullWidth color={newsOpen ? 'secondary' : 'primary'}>NEWS</Button>
						</div>
						<div className='panel__menu-item'>
							<Button onClick={setAluminiView} variant='contained' fullWidth color={aluminiOpen ? 'secondary' : 'primary'}>Alumini</Button>
						</div>

						<div className='panel__menu-item'>
							<Button onClick={setLeadersView} variant='contained' fullWidth color={leadersOpen ? 'secondary' : 'primary'}>Leadership</Button>
						</div>

						<div className='panel__menu-item'>
							<Button onClick={setUserView} variant='contained' fullWidth color={userOpen ? 'secondary' : 'primary'}>Users</Button>
						</div>


					</div>
				</Grid>
				<Grid item sm={8} xs={12}>
					<div className='dashboardBody'>
						{ newsOpen && <NewsPanel />}
						{ aluminiOpen && <AluminiPanel />}
						{userOpen && <UsersPanel />}
						{leadersOpen && <Menu />}
						
					</div>
				</Grid>
			</Grid>

		</div>
	)
}

export default Panel
