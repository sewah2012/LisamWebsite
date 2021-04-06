import './HeaderNav.css'
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';


const study = [
	{
		id: 1,
		name: 'Public Universities',
		link: '/study/universities',
		cName: 'menu-item',
	},
	{
		id: 2,
		name: 'Courses',
		link: '/study/courses',
		cName: 'menu-item',
	},
	{
		id: 3,
		name: 'TVET  ',
		link: '/study/TVET',
		cName: 'menu-item',
	},
]
const about = [
	{
		id: 1,
		name: 'The Leadership',
		link: '/about-us#staff',
		cName: 'menu-item',
	},
	{
		id: 2,
		name: 'Membership',
		link: '/membership',
		cName: 'menu-item',
	}
]

const alumini = [
	{
		id: 1,
		name: 'about-alumini',
		link: '/alumini/about',
		cName: 'menu-item',
	},
	{
		id: 2,
		name: 'Members',
		link: '/alumini/members',
		cName: 'menu-item',
	}
]

const services = [
	{
		id: 1,
		name: 'Visa Application',
		link: '/services/visa',
		cName: 'menu-item',
	},
	{
		id: 2,
		name: 'Passport Application',
		link: '/services/passport',
		cName: 'menu-item',
	},
	{
		id: 3,
		name: 'Register Citizen  ',
		link: '/services/citizen',
		cName: 'menu-item',
	},
]

const media = [
	{
		id: 1,
		name: 'News / Events',
		link: '/media/news',
		cName: 'menu-item',
	},
	{
		id: 2,
		name: 'Publication / Library',
		link: '/media/library',
		cName: 'menu-item',
	},
	{
		id: 3,
		name: 'Photo Gallery',
		link: '/media/gallery',
		cName: 'menu-item',
	},
]

const HeaderNav = () => {
	const [click, setClick] = useState(false);
	const [dropDown, setDropDown] = useState(false)
	const [dropAbout, setDropAbout] = useState(false)
	const [dropServices, setDropServices] = useState(false)
	const [dropMedia, setDropMedia] = useState(false)
	const [dropStudy, setDropStudy] = useState(false)


	const handleClick = () => setClick(!click);
	const closeMenu = () => setClick(false);

	const onMouseEnter = (title) => {
		// if (window.innerWidth < 960) {
		// 	setDropDown(false);
		// } else {
		// 	setDropDown(true)
		// }

		setDropDown(true)
	}

	const onMouseEnterStudy = (title) => {
		setDropStudy(true);
	}
	const onMouseEnterAbout = (title) => {
		setDropAbout(true);
	}

	const onMouseEnterServices = (title) => {

		setDropServices(true)
	}

	const onMouseEnterMedia = (title) => {

		setDropMedia(true)
	}



	/// on mouse leave events .. 
	const onMouseLeaveStudy = () => {
		// 
		setDropStudy(false)
	}

	const onMouseLeave = () => {

		setDropDown(false)
	}

	const onMouseLeaveAbout = () => {
		// 
		setDropAbout(false)
	}

	const onMouseLeaveServices = () => {

		setDropServices(false)
	}

	const onMouseLeaveMedia = () => {
		setDropMedia(false)
	}


	return (
		<div className='headerNav'>

			<div className='menu-icon' onClick={handleClick}>
				{click ? <CloseIcon /> : <MenuIcon />}
			</div>


			<ul className={click ? 'nav-menu active' : 'nav-menu'} >
				<li className='nav-item'>
					<Link to='/' className='nav-links' onClick={closeMenu} > Home </Link>
				</li>

				<li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
					<Link to='/about-us' className='nav-links' onClick={closeMenu} >
						About <ExpandMoreIcon />
					</Link>
					{dropDown && <DropDown items={about} />}
				</li>



				<li className='nav-item' onMouseEnter={onMouseEnterServices} onMouseLeave={onMouseLeaveServices}>
					<Link to='/services' className='nav-links' onClick={closeMenu} >
						Student services <ExpandMoreIcon />
					</Link>
					{dropServices && <DropDown items={services} />}
				</li>

				<li className='nav-item' onMouseEnter={onMouseEnterStudy} onMouseLeave={onMouseLeaveStudy}>
					<Link to='/study' className='nav-links'  onClick={closeMenu} >
						Study in Morocco <ExpandMoreIcon />
					</Link>
					{dropStudy && <DropDown items={study} />}
				</li>

				<li className='nav-item' onMouseEnter={onMouseEnterAbout} onMouseLeave={onMouseLeaveAbout}>
					<Link to='/alumini' className='nav-links' onClick={closeMenu} >
						Alumini <ExpandMoreIcon />
					</Link>
					{dropAbout && <DropDown items={alumini} />}
				</li>

				<li className='nav-item' onMouseEnter={onMouseEnterMedia} onMouseLeave={onMouseLeaveMedia}>
					<Link to='/media' className='nav-links' onClick={closeMenu} >
						Media <ExpandMoreIcon />
					</Link>
					{dropMedia && <DropDown items={media} />}
				</li>

				<li className='nav-item'>
					<Link to='/contact' className='nav-links' onClick={closeMenu} > Contact-us  </Link>
				</li>


			</ul>


		</div>
	)
}

export default HeaderNav
