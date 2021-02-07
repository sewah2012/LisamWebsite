import './Staff.css';
import React from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const Staff = ({ name, position, fieldofstudy, imageUrl, phone, email,facebook,linkind }) => {
	// const styles = {
	// 	backgroundColor: 'blue',
	// 	backgroundImage: `url(${imageUrl})`,
	// 	backgroundSize: 'cover',
	// 	bacgroundRepeat: 'no-repeat',
	// 	width: '20rem',
	// 	height: '17rem',
	// 	position: 'relative',
	// 	margin: '1rem 1.5rem',
	// 	borderRadius:'5px',
	// 	transition:'.5s ease',
	// 	display:'block',
	// 	blackfaceVisibility:'hidden'
	// 	// borderTopLeftRadius: '25pt',
	// 	// borderTopRightRadius: '25pt',

	// }

	const bgOverlay='/assets/imgs/overlay-bg.png';
	return (
		<div className='staff'>

			<img src={imageUrl} alt={name} className='image' />

			<div className='middle' 
				style={{
					backgroundImage: `url(${bgOverlay})`,
					backgroundSize: 'cover',
					bacgroundRepeat: 'no-repeat',
					width:' 20rem',
					height: '20rem',
					borderRadius:'7px'
					
				}}
			>
				<h1>Contact</h1><br/>
				<PhoneIcon />
				<p><i>{phone}</i></p>
				<MailOutlineIcon />
				<p><i>{email}</i></p><br />
				{facebook&&<FacebookIcon />} 
				{facebook&&<p><i><a href={facebook} target='_blank'>FB Profile</a></i></p>}<br/>
				{linkind&&<LinkedInIcon />}
				{linkind&&<p><i><a href={linkind} target='_blank'>My LinkInd</a></i></p>}
				


			</div>
			
			<div className='staffBox__details'>
				<h4><a href='' target='_blank' >{name} </a></h4>
				<h5>{position}</h5>

			</div>
		</div>
	)
}

export default Staff
