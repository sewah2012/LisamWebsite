import './Footer.css';
import React from 'react';
import { FooterLinks, usefulLinks } from './FooterLinks';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
	return (
		<div className='foooter'>
			<div className='footer'>
				<div className='footer__widget-address'>
					<div className='footer__widget-address-brand'>
						<img src='assets/imgs/logoCopie.png' alt="footer-logo" />
						<h2>LISAM</h2>
					</div>

					<div className='footer__widget-address-location'>
						<h4>
							23, Rue Cadi Ben Hamadi Senhaji, 10170 Souissi<br />
							Rabat, Kingdom of Morocco <br />
							P.O. Box 10000
							<br /><br />
							Tel.: (+212) 632 952 071 <br />
							Email: <span>lisamlisam26@gmail.com</span>
						</h4>

						<div className='social_icons'>
							<a href='https://www.facebook.com/Liberian-Student-Association-In-Morocco-102390798420984' target="_blank"><FacebookIcon fontSize="large" /></a>

						</div>
					</div>
				</div>

				<div className='footer__widget-links'>
					<div>
						<h2>-Navigation-</h2>
						<ul className='footer__links'>
							{FooterLinks.map((link, index) => (
								<li className='footer__links-link'>
									<Link to={link.path}>{link.label}</Link>
								</li>
							))}
						</ul>
					</div>

					<div><h2>-Useful Links-</h2>
						<ul className='footer__links'>
							{usefulLinks.map((link, index) => (
								<li className='footer__links-link'>
									<Link to={link.path}>{link.label}</Link>
								</li>
							))}
						</ul></div>
				</div>

				<div className='footer__widget-fb'>
					<iframe
						src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLiberian-Student-Association-In-Morocco-102390798420984&tabs=timeline&width=450&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2369188853102988"
						width='100%'
						height='100%'
						style={{ border: "none", overflow: "hidden" }}
						scrolling="no"
						frameborder="0"
						allowTransparency="true"
						allow="encrypted-media"
					/>
				</div>
			</div>

			<div className='footer__developer'>
				<p> copyright &copy; {new Date().getFullYear()} | Powered by the kind courtesy of: <span><a href='https://www.linkedin.com/feed/' target="_blank">Emmanuel Sahr Sewah</a> </span></p>
			</div>

		</div>
	)
}

export default Footer;
