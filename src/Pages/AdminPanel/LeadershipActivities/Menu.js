import './Menu.css';
import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import CommitteesLeaderPanel from './CommitteesLeaderPanel';
import LeadersPanel from './LeadersPanel';
import PastLeadershipPanel from './PastLeadershipPanel';

const Menu = () => {
	const [currentLeadersOpen, setcurrentLeadersOpen] = useState(true);
	const [committeesOpen, setcommitteesOpen] = useState(false);
	const [pastLeadersOpen, setpastLeadersOpen] = useState(false);


	const setCurrentLeadersView = () => {
		setcommitteesOpen(false);
		setpastLeadersOpen(false)
		setcurrentLeadersOpen(true);
	}

	const setCommitteesView = () => {
		setcommitteesOpen(true);
		setcurrentLeadersOpen(false);
		setpastLeadersOpen(false);

	}

	const setPastLeadersView = () => {
		setcommitteesOpen(false);
		setcurrentLeadersOpen(false);
		setpastLeadersOpen(true)

	}
	return (
		<div className='executivesMenu'>
			<div className='executivesMenu__items'>
				<div className='menu-item'>
					<Button onClick={setCurrentLeadersView} variant='contained' color={currentLeadersOpen ? 'secondary' : 'primary'}>Current Leadership</Button>
				</div>
				<div className='menu-item'>
					<Button onClick={setCommitteesView} variant='contained' color={committeesOpen ? 'secondary' : 'primary'}>Committees chairpersons</Button>
				</div>

				<div className='menu-item'>
					<Button onClick={setPastLeadersView} variant='contained' color={pastLeadersOpen ? 'secondary':'primary'}>Past leaders</Button>
				</div>

			</div>

			<div>
				{currentLeadersOpen && <LeadersPanel />}
				{committeesOpen && <CommitteesLeaderPanel />}
				{pastLeadersOpen && <PastLeadershipPanel />}
			</div>
		</div>
	)
}

export default Menu
