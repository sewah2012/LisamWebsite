import './HeaderNav.css'
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';
import { IconButton } from '@material-ui/core';


const study = [	
	{
		id: 4,
		name: 'Scholarships in Morocco',
		link: '/study-scholarship',
		cName: 'menu-item'
	},
	{
		id: 1,
		name: 'Public Universities',
		link: '/study-universities',
		cName: 'menu-item',
	},

	{
		id: 2,
		name: 'Courses',
		link: 'http://maroc-concourat.blogspot.com/2014/03/filieres-accreditees.html',
		cName: 'menu-item',
		out: true
	},
	{
		id: 3,
		name: 'TVET  ',
		link: 'https://www.ofppt.ma/fr/formations-diplomantes',
		cName: 'menu-item',
		out: true
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
		name: 'Past Presidents',
		link: '/past-presidents',
		cName: 'menu-item',
	},
	{
		id: 3,
		name: 'Committees and Chairman',
		link: '/committees',
		cName: 'menu-item',
	},
	{
		id: 4,
		name: 'Membership',
		link: '/membership',
		cName: 'menu-item',
	}
]

const alumini = [
	{
		id: 1,
		name: 'about-alumini',
		link: '/alumini-about',
		cName: 'menu-item',
	},
	{
		id: 2,
		name: 'Leadership',
		link: '/alumini-about#staff',
		cName: 'menu-item',
	},
	{
		id: 3,
		name: 'Alumini Members / Graduates',
		link: '/alumini',
		cName: 'menu-item',
	}
]

const services = [
	{
		id: 1,
		name: 'Medical Service',
		link: '/services/visa',
		cName: 'menu-item',
	},
	{
		id: 2,
		name: 'Academics  ',
		link: '/services/academics',
		cName: 'menu-item',
	},
	{
		id: 3,
		name: 'Allowances',
		link: '/services/allowances',
		cName: 'menu-item',
	},
]

const media = [
	{
		id: 1,
		name: 'News / Events',
		link: '/media-news',
		cName: 'menu-item',
	},
	{
		id: 2,
		name: 'Publication / Library',
		link: '/library',
		cName: 'menu-item',

	},
	{
		id: 3,
		name: 'Photo Gallery',
		link: '/gallery',
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
					<Link to='/about-us' className='nav-links' >
						<div onClick={closeMenu} >
							About
						</div>
						<IconButton onClick={onMouseEnter}>
							<ExpandMoreIcon fontSize='large'/>
						</IconButton>
					</Link>

					{dropDown && <DropDown items={about} />}
				</li>



				<li className='nav-item' onMouseEnter={onMouseEnterServices} onMouseLeave={onMouseLeaveServices}>
					<Link to='/services' className='nav-links' >
						<div onClick={closeMenu} >
							Student Services
						</div>						
						<IconButton onClick={onMouseEnterServices}>
							<ExpandMoreIcon fontSize='large' />
						</IconButton>
					</Link>
					{dropServices && <DropDown items={services} />}
				</li>

				<li className='nav-item' onMouseEnter={onMouseEnterStudy} onMouseLeave={onMouseLeaveStudy}>
					<Link to='/study' className='nav-links'  >
						<div onClick={closeMenu} >
							Study In Morocco
						</div>
						<IconButton onClick={onMouseEnterStudy}>
							<ExpandMoreIcon fontSize='large'/>
						</IconButton>
					</Link>
					{dropStudy && <DropDown items={study} />}
				</li>

				<li className='nav-item' onMouseEnter={onMouseEnterAbout} onMouseLeave={onMouseLeaveAbout}>
					<Link to='/alumini' className='nav-links' >
						<div onClick={closeMenu} >
							Alumini
						</div> <IconButton onClick={onMouseEnterAbout}>
							<ExpandMoreIcon fontSize='large'/>
						</IconButton>
					</Link>
					{dropAbout && <DropDown items={alumini} />}
				</li>

				<li className='nav-item' onMouseEnter={onMouseEnterMedia} onMouseLeave={onMouseLeaveMedia}>
					<Link to='/media' className='nav-links' >
						<div onClick={closeMenu} >
							Media
						</div> 
						<IconButton onClick={onMouseEnterMedia}>
							<ExpandMoreIcon fontSize='large's/>
						</IconButton>
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
