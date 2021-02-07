import './ContactForm.css';
import React from 'react'
import { Button } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const ContactForm = () => {
	
	return (
		<div className='contactForm'>
			<div>
				<div className='footer__widget-address'>
					<div className='footer__widget-address-brand'>
						<img src='/assets/imgs/logo.png' alt="footer-logo" />
						<h2>LISAM</h2>
					</div>

					<div className='footer__widget-address-location contactForm__address'>
						<h4>
							23, Rue Cadi Ben Hamadi Senhaji, 10170 Souissi<br />
							Rabat, Kingdom of Morocco <br />
							P.O. Box 10000
							<br /><br />
							<PhoneIcon fontSize="large"/>     (+212) 632 952 071 <br />
							<MailOutlineIcon fontSize="large"/>   <span>lisamlisam26@gmail.com</span>
						</h4>

						<div className='social_icons'>
							<a href='https://www.facebook.com/Liberian-Student-Association-In-Morocco-102390798420984' target="_blank"><FacebookIcon fontSize="large" /></a>

						</div>
					</div>
				</div>
			</div>
			<div className='contactForm__getintouch'> 
				<h2>Get in touch ... </h2>
				<div className='contactForm__wrapper' >
				<form className='contactForm__form' name="contact" method="POST" data-netlify="true">

					<input placeholder='Full Name' name='name' type='text' className='contactForm__form-field' required />


					<input placeholder='Email Address' name='email' type='email' className='contactForm__form-field' required />


					<textarea placeholder='Please specify your inquiry...' name='message' type='text' rows='10' className='contactForm__form-field' required />

					<Button color='primary' type='submit'>SEND MESSAGE</Button>
				</form>
			</div>
			</div>
			
		</div>


	)
}

export default ContactForm;
