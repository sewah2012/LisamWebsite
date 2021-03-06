import './Membership.css';
import { Button } from '@material-ui/core'
import React from 'react'

const Membership = () => {
	return (
		<div className='membership'>
			<h2>Membership</h2>

			<div className='membership__info'>
				<img src='/assets/imgs/memberships.jpg' alt='membership' />
				<div className='membership__info-details'>
					<p>
						The Liberian Student Association in Morocco consider every Liberian citizen
						pursuing High Education in the Kingdom of Morocco a Member of the Liberian Students Association in Morocco.
						However, any person has the rights to also make known or unknown their membership of the association. Currently the association bears the following numbers as active members.
				</p>
					<Button variant='contained'>Download Membership Form</Button>
					<Button variant='contained' color='primary'> Fill online</Button>
				</div>
			</div>

			<div className='membership_form'>

			</div>
		</div>
	)
}

export default Membership
