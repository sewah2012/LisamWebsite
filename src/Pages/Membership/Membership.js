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
						The Liberian Student Association in Morocco considers every Liberian citizen
						pursuing higher Education in the Kingdom of Morocco as a Member of the Association.
						However, any person has the rights to also make known or unknown their membership of the association. Currently the association bears the following numbers as active members.
				</p>
					<Button variant='contained'>
						<a href='https://firebasestorage.googleapis.com/v0/b/lisam-5c8b4.appspot.com/o/membership_form.pdf?alt=media&token=5a104472-8159-4bd4-a4a0-fbca4621a7d4' target='_blank'>Download Membership Form</a>
					</Button>
					<Button variant='contained' color='primary'>
						<a href='https://form.myjotform.com/203035435990555' target='_blank' >
							Fill online
					</a>
					</Button>

					

				</div>
			</div>

			<div className='membership_form'>

			</div>
		</div>
	)
}

export default Membership
