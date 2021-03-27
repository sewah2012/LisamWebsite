import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './AdminHeader.css';
import { MenuLinks } from './MenuLinks';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Button, IconButton } from '@material-ui/core';
import { KeyboardReturn } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../Redux/actions/userActions';
const Header = () => {
	const dispatch = useDispatch();
	const [MenuOpen, setMenuOpen] = useState(false);

	const toggleMenu=()=>setMenuOpen(!MenuOpen);
	return (
		<div className='Header'>

			<div className='Header__brand'>

				<Link to='/'><img src='assets/imgs/logoCopie.png' alt='brand' /></Link>
				<h1><Link to='/'>Liberian Students Association in Morocco</Link></h1>

			</div>



			<div className='Header__navbar'>
				<ul className={MenuOpen?'Header__navbar-links active':'Header__navbar-links'}>
					{MenuLinks.map((link, index) => (
						<li
							key={index}
							className={link.cName}
						>
							<Link to={link.path} activeStye={{ color: "brown" }}>
								{link.label}
							</Link>
						</li>
					))}

					<IconButton onClick={()=>{dispatch(logoutUser())}}>
						<KeyboardReturn fontSize='large' color='secondary'/>
					</IconButton>
				</ul>

			</div>
			

			<div className='header__mobile'>
				<IconButton >
					{ MenuOpen ? <Button onClick = {toggleMenu}><CloseIcon fontSize='large'/></Button> : <Button onClick = {toggleMenu}><MenuIcon fontSize='large'/></Button>}
				</IconButton>
			</div>


			

		</div>

	)
}

export default Header
