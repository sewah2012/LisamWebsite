import './Chair.css'
import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { EmailOutlined, Phone } from '@material-ui/icons';

const Chair = ({ cChairPerson, committee, fieldofstudy, imageUrl, phone, email, facebook, linkind }) => {
	return (
		<div className='chair'>
			<img src={imageUrl} alt='Chair_Person' />
			<h2>{cChairPerson}</h2>
			<p>Chairperson</p>
			<h4>{committee}</h4>
			<Phone />
			<h5>{phone}</h5>
			<EmailOutlined />:<h5> {email}</h5>
			<div className='chair__social'>
				{facebook && <p><i><a href={facebook} rel="noreferrer" target='_blank'><FacebookIcon fontSize='large'/></a></i></p>}<br />
				{linkind && <p><i><a href={linkind} rel="noreferrer" target='_blank'><LinkedInIcon fontSize='large'/></a></i></p>}
			</div>
		</div>
	)
}

export default Chair
