import './DropDown.css'
import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const DropDown = ({ items }) => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	return (
		<div className='dropdown'>
			<ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
				{items.map(item => (
					<li key={item.id} >
						{
							item?.out ? (
								<a href={item.link} target='_blank' rel="noreferrer" className={item.cName} onClick={() => setClick(false)}>
									{item.name}
								</a>
							) : (
								<HashLink to={item.link} className={item.cName} onClick={() => setClick(false)}>
									{item.name}
								</HashLink>
							)
						}
					</li>
				))}
			</ul>

		</div>
	)
}

export default DropDown
