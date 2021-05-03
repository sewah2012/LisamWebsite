import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import HeaderNav from './HeaderNav';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';


const Header = () => {
	// const [MenuOpen, setMenuOpen] = useState(false);

	// const toggleMenu = () => setMenuOpen(!MenuOpen);
	const {authenticated} = useSelector(state => state.user)
	return (
		<div>
			<div className='Header'>

				<div className='Header__brand'>

					<Link to='/'><img src='assets/imgs/logoCopie.png' alt='brand' /></Link>
					<h1><Link to='/'>Liberian Students Association in Morocco</Link></h1>

				</div>



				<div className='Header__navbar'>
					<div className='Header__navbar-social'>
						<a href='https://www.facebook.com/Liberian-Student-Association-In-Morocco-102390798420984' target="_blank"><FacebookIcon fontSize="medium" /></a>
						<a href='https://www.facebook.com/Liberian-Student-Association-In-Morocco-102390798420984' target="_blank"><InstagramIcon fontSize="medium" /></a>
						<a href='https://www.facebook.com/Liberian-Student-Association-In-Morocco-102390798420984' target="_blank"><YouTubeIcon fontSize="medium" /></a>
					</div>
					<div className='Header__navbar-admin'>
						{
							authenticated ? <Link to='/admin-panel'><Button color='secondary' variaint='contained'>Admin Panel</Button></Link> : 
							(
								<Link to='/login'><Button color='secondary' variaint='contained'>Sign in</Button></Link>
							)
						}
					</div>
				</div>


				{/* <div className='header__mobile'>
					<IconButton >
						{MenuOpen ? <Button onClick={toggleMenu}><CloseIcon fontSize='large' /></Button> : <Button onClick={toggleMenu}><MenuIcon fontSize='large' /></Button>}
					</IconButton>
				</div> */}




			</div>
			<HeaderNav />
		</div>

	)
}

export default Header
